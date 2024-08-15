<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){
        $pending = Ticket::where('status', '=', 'Pending')->count();
        $assigned = Ticket::where('status', '=', 'Assigned')->count();
        $ongoing = Ticket::where('status', '=', 'Ongoing')->count();
        $closed = Ticket::where('status', '=', 'Closed')->count();
        $urgent = Ticket::where('isUrgent', '=', 'true')->count();
        return response()->json([
            'pending' => $pending,
            'assigned' => $assigned,
            'ongoing' => $ongoing,
            'closed' => $closed,
            'urgent' => $urgent,
        ], 200);
    }
    public function show($id)
    {
        $user =User::where('id',$id)->first();
        if ($user->position == 2) {
            $pending = Ticket::where([['assigned_to', '=', $id], ['status', '=', 'Pending']])->count();
            $assigned = Ticket::where([['assigned_to', '=', $id], ['status', '=', 'Assigned']])->count();
            $ongoing = Ticket::where([['assigned_to', '=', $id], ['status', '=', 'Ongoing']])->count();
            $closed = Ticket::where([['assigned_to', '=', $id], ['status', '=', 'Closed']])->count();
            $urgent = Ticket::where([['assigned_to', '=', $id], ['isUrgent', '=', 'true']])->count();
        }else if ($user->position == 3) {
            $pending = Ticket::where([['user_id', '=', $id], ['status', '=', 'Pending']])->count();
            $assigned = Ticket::where([['user_id', '=', $id], ['status', '=', 'Assigned']])->count();
            $ongoing = Ticket::where([['user_id', '=', $id], ['status', '=', 'Ongoing']])->count();
            $closed = Ticket::where([['user_id', '=', $id], ['status', '=', 'Closed']])->count();
            $urgent = Ticket::where([['user_id', '=', $id], ['isUrgent', '=', 'true']])->count();
        }
       
        return response()->json([
            'pending' => $pending,
            'assigned' => $assigned,
            'ongoing' => $ongoing,
            'closed' => $closed,
            'urgent' => $urgent,
        ], 200);
    }
}
