<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->input('query', '');
        $perPage = $request->input('per_page', 10);
    
        // Step 1: Search tickets based on the query
        $tickets = Ticket::where('ticket_id', 'like', '%' . $query . '%')
            ->with(['user','assigned_to'])
            ->orWhere('ticket_id', 'like', '%' . $query . '%') // Add other fields as necessary
            ->paginate($perPage);
    
        // Step 2: Return the paginated results in JSON format
        return response()->json([
            'result' => $tickets
        ], 200);
    }
    public function store(Request $request)
    {
        $ticket = Ticket::create($request->all());
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
        $tickets = Ticket::paginate($perPage);
        return response()->json([
            'result' => $tickets
        ], 200);
    }
    public function show(string $id)
    {
        $ticket = Ticket::where('id', $id)->first();
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
