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

        // Define base ticket query condition
        $ticketFilter = function ($query) use ($user) {
            if ($user->site_id == 2) {
                $query->where(function ($q) {
                    $q->where('scsite', '=', 'Carcar Site')
                        ->orWhere('site_id', '=', 2);
                });
            } else {
                $query->where('scsite', '!=', 'Carcar Site');
            }
        };

        // Ticket status counts
        $pending = Ticket::where('status', 'Pending')->where($ticketFilter)->count();
        $assigned = Ticket::where('status', 'Assigned')->where($ticketFilter)->count();
        $ongoing = Ticket::where('status', 'Ongoing')->where($ticketFilter)->count();
        $declined = Ticket::where('status', 'Declined')->where($ticketFilter)->count();
        $closed = Ticket::where('status', 'Closed')->where($ticketFilter)->count();
        $total = Ticket::where($ticketFilter)->count();
        $urgent = Ticket::where('isUrgent', true)->where($ticketFilter)->count();

        if ($user->site_id == 2) {
            $users = User::where('site_id', 2)
                ->where('account_type', 2)
                ->get();
        } else {
            $users = User::where('account_type', 2)
                ->where('site_id', $user->site_id)
                ->get();
        }


        // Append daily/weekly/monthly ticket stats to each user
        $users = $users->map(function ($value) use ($ticketFilter) {
            $value['daily'] = Ticket::where('assigned_to', $value->id)
                ->where($ticketFilter)
                ->selectRaw('DATE(created_at) as title, COUNT(*) as count')
                ->groupBy('title')
                ->orderBy('title', 'asc')
                ->get();

            $value['weekly'] = Ticket::where('assigned_to', $value->id)
                ->where($ticketFilter)
                ->selectRaw('YEAR(created_at) as year, WEEK(created_at) as title, COUNT(*) as count')
                ->groupBy('year', 'title')
                ->orderBy('year', 'asc')
                ->orderBy('title', 'asc')
                ->get();

            $value['monthly'] = Ticket::where('assigned_to', $value->id)
                ->where($ticketFilter)
                ->selectRaw('YEAR(created_at) as year, MONTH(created_at) as title, COUNT(*) as count')
                ->groupBy('year', 'title')
                ->orderBy('year', 'asc')
                ->orderBy('title', 'asc')
                ->get();

            return $value;
        });

        // Category ticket counts
        $categories = Category::get();
        foreach ($categories as $key => $category) {
            $category['count'] = Ticket::where('category_id', $category->id)
                ->where($ticketFilter)
                ->count();
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
