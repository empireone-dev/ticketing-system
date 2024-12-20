<?php

namespace App\Http\Controllers;

use App\Mail\MessageNotification;
use App\Models\Note;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class NoteController extends Controller
{
    public function show(string $id)
    {
        $note = Note::where('ticket_id', $id)->with('user')->orderBy('id', 'desc')->get();
        return response()->json([
            'result' => $note
        ], 200);
    }
    public function store(Request $request)
    {
        Note::create($request->all());
        $ticket = Ticket::where('id', '=', $request->ticket_id)->with(['assigned_to', 'user'])->first();
        if ($ticket) {
            $link = null;
            $email = null;
            switch ($ticket->user['account_type']) {
                case 1:
                    $link = 'https://eo-iticketing.com/admin/tickets/' . (string)$ticket->id . '/notes';
                    $email = $ticket->user['email'];
                    break;
                case 2:
                    $link = 'https://eo-iticketing.com/employee/it/tickets/' . (string)$ticket->id . '/notes';
                    $email = $ticket->user['email'];
                    break;
                case 3:
                    $link = 'https://eo-iticketing.com/employee/users/tickets/' . (string)$ticket->id . '/notes';
                    $email = $ticket->assigned_to['email'];
                    break;
            }

            if (isset($link)) {

                Mail::to($email)->send(new MessageNotification([
                    'id' => (string)$ticket->id,
                    'name' => $ticket->user['name'],
                    'email' => $ticket->user['email'],
                    'account_type' => $ticket->user['account_type'],
                    'link' => $link,
                    'message' => $request->notes,
                ]));
            }
        }

        return response()->json([
            'result' =>  'Notification sent successfully.'
        ], 200);
    }
}
