<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index(){
        
        $user = Auth::user();
        $pending = Ticket::where([['status', '=', 'Pending'],['site_id', '=', $user->site_id]])->count();
        $assigned = Ticket::where([['status', '=', 'Assigned'],['site_id', '=', $user->site_id]])->count();
        $ongoing = Ticket::where([['status', '=', 'Ongoing'],['site_id', '=', $user->site_id]])->count();
        $declined = Ticket::where([['status', '=', 'Declined'],['site_id', '=', $user->site_id]])->count();
        $closed = Ticket::where([['status', '=', 'Closed'],['site_id', '=', $user->site_id]])->count();
        $urgent = Ticket::where([['isUrgent', '=', 'true'],['site_id', '=', $user->site_id]])->count();
        return response()->json([
            'pending' => $pending,
            'assigned' => $assigned,
            'ongoing' => $ongoing,
            'closed' => $closed,
            'urgent' => $urgent,
            'declined' => $declined,
        ], 200);
    }
    public function show($id)
    {
        $user =User::where('id',$id)->first();
        if ($user->account_type == 2) {
            $pending = Ticket::where([['assigned_to', '=', $id], ['status', '=', 'Pending']])->count();
            $assigned = Ticket::where([['assigned_to', '=', $id], ['status', '=', 'Assigned']])->count();
            $ongoing = Ticket::where([['assigned_to', '=', $id], ['status', '=', 'Ongoing']])->count();
            $closed = Ticket::where([['assigned_to', '=', $id], ['status', '=', 'Closed']])->count();
            $urgent = Ticket::where([['assigned_to', '=', $id], ['isUrgent', '=', 'true'],['status', '<>', 'Closed']])
            ->orWhere([['assigned_to', '=', $id], ['isUrgent', '=', 'true'],['status', '<>', 'Declined']])->count();
        }else if ($user->account_type == 3) {
            $pending = Ticket::where([['user_id', '=', $id], ['status', '=', 'Pending']])->count();
            $assigned = Ticket::where([['user_id', '=', $id], ['status', '=', 'Assigned']])->count();
            $ongoing = Ticket::where([['user_id', '=', $id], ['status', '=', 'Ongoing']])->count();
            $closed = Ticket::where([['user_id', '=', $id], ['status', '=', 'Closed']])->count();
            $urgent = Ticket::where([['user_id', '=', $id], ['isUrgent', '=', 'true'],['status', '<>', 'Closed']])
            ->orWhere([['assigned_to', '=', $id], ['isUrgent', '=', 'true'],['status', '<>', 'Declined']])->count();
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
