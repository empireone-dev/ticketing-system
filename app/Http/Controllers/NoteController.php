<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function show(string $id)
    {
        $ticket = Note::where('ticket_id', $id)->with('user')->orderBy('id', 'desc') ->get();
        return response()->json([
            'result' => $ticket
        ], 200);
    }
    public function store(Request $request)
    {
        $ticket = Note::create($request->all());
        return response()->json([
            'result' => $ticket
        ], 200);
    }
}
