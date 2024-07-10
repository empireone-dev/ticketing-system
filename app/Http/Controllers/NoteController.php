<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function show(string $id)
    {
        $ticket = Note::where('ticket_id', $id)->with('user')->get();
        return response()->json([
            'result' => $ticket
        ], 200);
    }
}
