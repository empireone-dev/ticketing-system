<?php

namespace App\Http\Controllers;

use App\Events\OpenTicketNotification;
use App\Models\Activity;
use App\Models\Category;
use App\Models\File;
use App\Models\Note;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class TicketController extends Controller
{
    public function search_ticket(Request $request, $userid)
    {

    }
    public function get_ticket_by_user_id(Request $request, $userid)
    {
        $search = $request->search;
        $perPage = $request->input('per_page', 10);
        $user = User::where('id', $userid)->first();
        if ($user->account_type == 2) {
            $query = Ticket::where('assigned_to', $userid);
        } else if ($user->account_type == 3) {
            $query = Ticket::where('user_id', $userid);
        }
        if ($search == 'isUrgent') {
            $query->where('status', '<>', 'Closed');
            $query->orWhere('status', '<>', 'Declined');
            $query->where('isUrgent', 'true'); 
        } else {
            if ($search) {
                $query->where('status', $search);
            }
        }
        $tickets = $query
            ->with(['user', 'assigned_to', 'category'])
            ->orderBy('id', 'desc')
            ->paginate($perPage);

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
        $user2 = User::where('id', $ticket->first()->assigned_to)->first();

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
        return response()->json([
            'result' => $ticket->get()
        ], 200);
    }
    public function index(Request $request)
    {
        $query = $request->input('query', '');
        $search = $request->input('search', ''); // Add search input
        $perPage = $request->input('per_page', 10);
        $site_id = $request->input('site_id', '');

        // Build the query based on search criteria
        $queryBuilder = Ticket::query();
        $queryBuilder->where('site_id', '=' ,$site_id);
        if ($query) {
            $queryBuilder->where(function ($q) use ($query) {
                $q->where('ticket_id', 'like', '%' . $query . '%');
            });
        }

        if ($search == 'isUrgent') {
            $queryBuilder->where('isUrgent', 'true'); // Assuming 'isUrgent' is a boolean field
        } elseif ($search) {
            $queryBuilder->where('status', $search);
        }

        $tickets = $queryBuilder
            ->with(['user', 'assigned_to'])
            ->orderBy('id', 'desc') // Sort results in descending order based on ticket_id
            ->paginate($perPage);

        return response()->json([
            'result' => $tickets
        ], 200);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        if ($request->category_id == 'Others') {
            $category  = Category::create([
                'name' => $request->others
            ]);
        }
        $ticket = Ticket::create([
            'site_id'=>$user->site_id,
            'user_id' => $request->user_id,
            'assigned_to' => intval($request->assigned_to),
            'category_id' => $request->category_id == 'Others' ? $category->id : intval($request->category_id),
            'details' => $request->details,
            'status' => $request->status,
            'isUrgent' => $request->isUrgent,
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
