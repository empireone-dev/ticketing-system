<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {

        $user = Auth::user();
        $pending = Ticket::where([['status', '=', 'Pending'], ['site_id', '=', $user->site_id]])->count();
        $assigned = Ticket::where([['status', '=', 'Assigned'], ['site_id', '=', $user->site_id]])->count();
        $ongoing = Ticket::where([['status', '=', 'Ongoing'], ['site_id', '=', $user->site_id]])->count();
        $declined = Ticket::where([['status', '=', 'Declined'], ['site_id', '=', $user->site_id]])->count();
        $closed = Ticket::where([['status', '=', 'Closed'], ['site_id', '=', $user->site_id]])->count();
        $total = Ticket::where([['site_id', '=', $user->site_id]])->count();
        $urgent = Ticket::where([['isUrgent', '=', 'true'], ['site_id', '=', $user->site_id]])->count();
        $users = User::where([['account_type', '=', 2], ['site_id', '=', $user->site_id]])->get();
        foreach ($users as $key => $value) {
            $value['daily'] = Ticket::where('assigned_to', '=', $value->id)
                ->selectRaw('DATE(created_at) as title, COUNT(*) as count')
                ->groupBy('title')
                ->orderBy('title', 'asc')
                ->get();
            $value['weekly'] = Ticket::where('assigned_to', '=', $value->id)
                ->selectRaw('YEAR(created_at) as year, WEEK(created_at) as title, COUNT(*) as count')
                ->groupBy('year', 'title')
                ->orderBy('year', 'asc')
                ->orderBy('title', 'asc')
                ->get();
            $value['monthly'] = Ticket::where('assigned_to', '=', $value->id)
                ->selectRaw('YEAR(created_at) as year, MONTH(created_at) as title, COUNT(*) as count')
                ->groupBy('year', 'title')
                ->orderBy('year', 'asc')
                ->orderBy('title', 'asc')
                ->get();
        }

        $categories = Category::get();
        foreach ($categories as $key => $category) {
            $ticket = Ticket::where('category_id', $category->id)->get();
            $category['count'] = $ticket->count();
        }

        return response()->json([
            'categories' => $categories,
            'data' => $users,
            'pending' => $pending,
            'assigned' => $assigned,
            'ongoing' => $ongoing,
            'closed' => $closed,
            'urgent' => $urgent,
            'declined' => $declined,
            'total' => $total,
        ], 200);
    }
    public function show($id)
    {
        $user = User::where('id', $id)->first();
        if ($user->account_type == 2) {
            $pending = Ticket::where([['assigned_to', '=', $id], ['status', '=', 'Pending']])->count();
            $assigned = Ticket::where([['assigned_to', '=', $id], ['status', '=', 'Assigned']])->count();
            $ongoing = Ticket::where([['assigned_to', '=', $id], ['status', '=', 'Ongoing']])->count();
            $closed = Ticket::where([['assigned_to', '=', $id], ['status', '=', 'Closed']])->count();
            $urgent = Ticket::where([['assigned_to', '=', $id], ['isUrgent', '=', 'true'], ['status', '<>', 'Closed']])
                ->orWhere([['assigned_to', '=', $id], ['isUrgent', '=', 'true'], ['status', '<>', 'Declined']])->count();
        } else if ($user->account_type == 3) {
            $pending = Ticket::where([['site_id', '=', $user->site_id], ['user_id', '=', $id], ['status', '=', 'Pending']])->count();
            $assigned = Ticket::where([['site_id', '=', $user->site_id], ['user_id', '=', $id], ['status', '=', 'Assigned']])->count();
            $ongoing = Ticket::where([['site_id', '=', $user->site_id], ['user_id', '=', $id], ['status', '=', 'Ongoing']])->count();
            $closed = Ticket::where([['site_id', '=', $user->site_id], ['user_id', '=', $id], ['status', '=', 'Closed']])->count();
            $urgent = Ticket::where([['site_id', '=', $user->site_id], ['user_id', '=', $id], ['isUrgent', '=', 'true'], ['status', '<>', 'Closed']])
                ->orWhere([['site_id', '=', $user->site_id], ['assigned_to', '=', $id], ['isUrgent', '=', 'true'], ['status', '<>', 'Declined']])->count();
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
