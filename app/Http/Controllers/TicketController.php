<?php

namespace App\Http\Controllers;

use App\Events\OpenTicketNotification;
use App\Mail\NewIncommingTicket;
use App\Mail\SendCredentials;
use App\Models\Activity;
use App\Models\Category;
use App\Models\File;
use App\Models\Note;
use App\Models\Ticket;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class TicketController extends Controller
{

    public function export_generate_ticket(Request $request) {

        $startDate = Carbon::createFromFormat('m-d-Y', $request->start)->format('Y-m-d');
        $endDate = Carbon::createFromFormat('m-d-Y', $request->end)->format('Y-m-d');

        $tickets = Ticket::whereBetween('created_at', [$startDate,$endDate])->with(['user','assigned_to'])->get();
        return response()->json([
            'result' => $tickets
        ], 200);
    }
    public function search_ticket(Request $request, $userid) {}
    public function get_ticket_by_user_id(Request $request, $userid)
    {
        $search = $request->search;
        $perPage = $request->input('per_page', 10);
        $user = User::where('id', $userid)->first();
        if ($user->account_type == 2) {
            $query = Ticket::where('assigned_to', $userid);
            if ($search == 'isUrgent') {
                $query->where('status', '<>', 'Closed');
                $query->orWhere('status', '<>', 'Declined');
                $query->where('isUrgent', 'true');
            } else {
                if ($search) {
                    $query->where('status', $search);
                }
            }
        } else if ($user->account_type == 3) {
            $query = Ticket::where([['user_id','=',$user->id],['site_id','=',$user->site_id]]);
            // if ($search == 'isUrgent') {
            //     $query->where('status', '<>', 'Closed');
            //     $query->orWhere('status', '<>', 'Declined');
            //     $query->where('isUrgent', 'true');
            // } else {
            //     if ($search) {
            //         $query->where('status', $search);
            //     }
            // }
        }

        if ($query) {
            $tickets = $query
                ->with(['user', 'assigned_to', 'category'])
                ->orderBy('id', 'desc')
                ->paginate($perPage);
        }
        return response()->json([
            'result' => $tickets
        ], 200);
    }
    public function get_categories_by_category(Request $request, $category_id)
    {

        // $query = $request->input('query', '');
        $perPage = $request->input('per_page', 10);
        // $tickets = Ticket::where('category_id', $category_id);
        $tickets = Ticket::where('category_id', '=', $category_id)
            ->with(['user', 'assigned_to', 'category'])
            // ->orWhere('ticket_id', 'like', '%' . $query . '%')
            ->orderBy('id', 'desc')
            ->paginate($perPage);
        return response()->json([
            'result' => $tickets
        ], 200);
    }

    public function update_ticket_status(Request $request, $id)
    {
        $user = User::where('id', $request->assigned_to)->first();
        $ticket = Ticket::where('id', $id);
        $ticket->with(['files', 'user', 'assigned_to', 'category', 'notes']);
        if ($ticket->first()->assigned_to == 0) {
            $user2 = User::where('id', $request->assigned_to)->first();
        } else {
            $user2 = User::where('id', $ticket->first()->assigned_to)->first();
        }

        if ($request->status == 'Assigned') {
            Activity::create([
                'ticket_id' => $ticket->first()->id,
                'user_id' => $request->user_id,
                'message' => 'Ticket assigned from ' . $user2->name . ' to ' . $user->name,
                'type' => 'reassigned',
            ]);
        } else {
            Activity::create([
                'ticket_id' => $ticket->first()->id,
                'user_id' => $request->user_id,
                'message' => 'Ticket ' . $ticket->first()->ticket_id . ' moved to ' . $request->status,
                'type' => 'moved',
            ]);
        }
        Note::create([
            'ticket_id' => $id,
            'user_id' => $request->user_id,
            'notes' => $request->notes,
        ]);
        $ticket->update([
            'status' => $request->status,
            'assigned_to' => ($request->status == 'Assigned') ? $request->assigned_to : $ticket->first()->assigned_to,
        ]);

        $message = $ticket->first();
        event(new OpenTicketNotification($message));

        if ($request->status == 'Assigned') {
            Mail::to($user->email)->send(new NewIncommingTicket([
                'ticket_id' => $ticket->first()->ticket_id,
                'details' => $ticket->first()->details,
            ]));
        }

        return response()->json([
            'result' => $ticket->get()
        ], 200);
    }


    public function index(Request $request)
    {
        $query = $request->input('query', ''); // Search query for ticket_id or other fields
        $search = $request->input('search', ''); // Filter by status or other attributes
        $perPage = $request->input('per_page', 10); // Pagination limit
        $site_id = $request->input('site_id', ''); // Site ID filter
        $category = $request->input('category_id', null);
        // $assigned = $request->input('assigned_to', null);  // Category filter
        $searching = $request->input('searching', ''); // General search for multiple fields
        $assigned_to = $request->input('assigned_to', ''); // General search for multiple fields
        
        $user = Auth::user();

        // Build the base query
        $queryBuilder = Ticket::query();

        // Filter by site ID if the user is not an admin
        if ($user->id !== 0) {
            $queryBuilder->where('site_id', '=', $site_id);
        }

        // Filter by ticket_id or other attributes using `query`
        if (!empty($query)) {
            $queryBuilder->where('ticket_id', 'like', '%' . $query . '%');
        }

        // Filter by category_id
        // if ($assigned && $assigned !== 'null' && $assigned !== 'N/A') {
        //     $queryBuilder->where('category_id', '=', $assigned);
        // } elseif ($assigned === 'N/A') {
        //     $queryBuilder->where(function ($q) {
        //         $q->whereNull('category_id')->orWhere('category_id', '');
        //     });
        // }
        if ($assigned_to && $assigned_to !== 'null' && $assigned_to !== 'N/A') {
            $queryBuilder->where('assigned_to', '=', $assigned_to);
        }
        
        if ($category && $category !== 'null' && $category !== 'N/A') {
            $queryBuilder->where('category_id', '=', $category);
        } elseif ($category === 'N/A') {
            $queryBuilder->where(function ($q) {
                $q->whereNull('category_id')->orWhere('category_id', '');
            });
        }

        // Filter by urgency or status
        if ($search === 'isUrgent') {
            $queryBuilder->where('isUrgent', true); // Assuming `isUrgent` is a boolean column
        } elseif (!empty($search)) {
            $queryBuilder->where('status', $search);
        }

        // General search for multiple fields
        if (!empty($searching)) {
            $queryBuilder->where(function ($subQuery) use ($searching) {
                $subQuery->where('ticket_id', 'LIKE', '%' . $searching . '%')
                    ->orWhere('user_id', 'LIKE', '%' . $searching . '%') // Search by user_id
                    ->orWhereHas('user', function ($userQuery) use ($searching) {
                        $userQuery->where('name', 'LIKE', '%' . $searching . '%'); // Search by user name
                    });
            });
        }

        // Retrieve and paginate results
        $tickets = $queryBuilder
            ->with(['user', 'assigned_to', 'category']) // Include relations
            ->orderBy('id', 'desc') // Sort by ID in descending order
            ->paginate($perPage);

        // Return the paginated results as JSON
        return response()->json([
            'result' => $tickets,
        ], 200);
    }



    public function store(Request $request)
    {
        $user = Auth::user();
        $at = User::where('id', $request->assigned_to)->first();
        if ($request->category_id == 'Others') {
            $category  = Category::create([
                'name' => $request->others
            ]);
        }
        $ticket = Ticket::create([
            'site_id' => ($request->user_id == 0) ? $at->site_id : $user->site_id,
            'user_id' => $request->user_id,
            'assigned_to' => intval($request->assigned_to),
            'category_id' => $request->category_id == 'Others' ? $category->id : intval($request->category_id),
            'details' => $request->details,
            'station' => $request->station,
            'status' => $request->status,
            'isUrgent' => $request->isUrgent,
            'start' => $request->start,
            'end' => $request->end,
        ]);
        $length = strlen($ticket->id);

        // Step 3: Generate a formatted id by prefixing zeros based on the length
        if ($length == 1) {
            $id = date("dmy") . '00000' . $ticket->id;
        } else if ($length == 2) {
            $id = date("dmy") . '0000' . $ticket->id;
        } else if ($length == 3) {
            $id = date("dmy") . '000' . $ticket->id;
        } else {
            $id = date("dmy") . str_pad($ticket->id, 6, '0', STR_PAD_LEFT);
        }
        $ticket->update([
            'ticket_id' => 'IT' . $id
        ]);
        $perPage = $request->input('per_page', 10);
        $tickets = Ticket::with(['user', 'assigned_to'])->orderBy('id', 'desc')->paginate($perPage);
        Activity::create([
            'ticket_id' => $ticket->id,
            'user_id' => $request->user_id,
            'message' => 'created new ' . ($request->isUrgent == 'true' ? 'urgent ' : '') . 'ticket',
            'type' => 'create',
        ]);
        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $uploadedFile) {
                $path = $uploadedFile->store(date("Y"), 's3');
                $url = Storage::disk('s3')->url($path);
                File::create([
                    'ticket_id' => $ticket->id,
                    'url' => $url,
                ]);
            }
        }
        $message = $ticket;
        event(new OpenTicketNotification($message));
        $user = User::where('id', $request->assigned_to)->first();
        Mail::to($user->email)->send(new NewIncommingTicket([
            'ticket_id' => $ticket->ticket_id,
            'details' => $ticket->details,
        ]));
        return response()->json([
            'result' => $tickets,
        ], 200);
    }

    public function show(string $id)
    {
        $ticket = Ticket::where('id', $id)->with(['files', 'user', 'assigned_to', 'category', 'notes'])->first();
        return response()->json([
            'result' => $ticket
        ], 200);
    }

    public function update(Request $request, string $id)
    {
        $ticket = Ticket::where('id', $id)->first();
        $ticket->update($request->all());
        return response()->json([
            'result' => $ticket
        ], 200);
    }

    public function destroy(string $id)
    {
        $ticket = Ticket::where('id', $id)->first();
        $ticket->delete();
        return response()->json([
            'result' => $ticket
        ], 200);
    }
}
