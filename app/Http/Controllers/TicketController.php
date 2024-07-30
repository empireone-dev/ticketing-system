<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\File;
use App\Models\Note;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TicketController extends Controller
{
    public function get_ticket_by_user_id(Request $request,$userid){
          // $query = $request->input('query', '');
          $perPage = $request->input('per_page', 10);
          $tickets = Ticket::where('user_id','=',$userid)
          ->with(['user', 'assigned_to','category'])
          ->orderBy('id', 'desc')
          ->paginate($perPage);
          return response()->json([
              'result' => $tickets
          ], 200);
    }
    public function get_categories_by_category(Request $request,$category_id){

        // $query = $request->input('query', '');
        $perPage = $request->input('per_page', 10);
        // $tickets = Ticket::where('category_id', $category_id);
        $tickets = Ticket::where('category_id','=',$category_id)
        ->with(['user', 'assigned_to','category'])
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
            'ticket_id'=>$id,
            'user_id'=>$request->user_id,
            'notes'=>$request->notes,
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
        $perPage = $request->input('per_page', 10);

        // Step 1: Search tickets based on the query
        $tickets = Ticket::where('ticket_id', 'like', '%' . $query . '%')
            ->with(['user', 'assigned_to'])
            ->orWhere('ticket_id', 'like', '%' . $query . '%') // Add other fields as necessary
            ->orderBy('id', 'desc') // Sort results in descending order based on ticket_id
            ->paginate($perPage);

        // Step 2: Return the paginated results in JSON format
        return response()->json([
            'result' => $tickets
        ], 200);
    }
    public function store(Request $request)
    {
        $ticket = Ticket::create([
            'user_id' => $request->user_id,
            'assigned_to' => intval($request->assigned_to),
            'category_id' => intval($request->category_id),
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
