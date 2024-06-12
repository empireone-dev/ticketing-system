<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function index()
    {
        //
    }
    public function store(Request $request)
    {
        $ticket = Ticket::create($request->all());
        return response()->json([
            'result' => $ticket
        ], 200);
    }
    public function show(string $id)
    {
        $ticket = Ticket::where('id',$id)->first();
        return response()->json([
            'result' => $ticket
        ], 200);
    }

    public function update(Request $request, string $id)
    {
        $ticket = Ticket::where('id',$id)->first();
        $ticket->update($request->all());
        return response()->json([
            'result' => $ticket
        ], 200);
    }

    public function destroy(string $id)
    {
        $ticket = Ticket::where('id',$id)->first();
        $ticket->delete();
        return response()->json([
            'result' => $ticket
        ], 200);
    }
}
