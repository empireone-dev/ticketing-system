<?php

namespace App\Http\Controllers;

use App\Events\OpenTicketNotification;
use Illuminate\Http\Request;

class OpenTicketNotidicationController extends Controller
{
    public function open_ticket_notification(Request $request)
    {
        // $message = $request->all();
        // event(new OpenTicketNotification($message));
        // return response()->json(['status' => 'Event triggered!']);
    }
}
