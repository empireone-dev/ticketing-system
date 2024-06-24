<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Ticket;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $tickets = Category::orderBy('id', 'desc')->get();

        // Iterate through each category and count the tickets associated with it
        foreach ($tickets as $key => $value) {
            $pendingCount = Ticket::where([['category_id', '=', $value->id], ['status', '=', 'Pending']])->count();
            $assignedCount = Ticket::where([['category_id', '=', $value->id], ['status', '=', 'Assigned']])->count();
            $onGoingCount = Ticket::where([['category_id', '=', $value->id], ['status', '=', 'Ongoing']])->count();
            $closedCount = Ticket::where([['category_id', '=', $value->id], ['status', '=', 'Closed']])->count();
            $value->pending = $pendingCount;
            $value->assigned = $assignedCount;
            $value->ongoing = $onGoingCount;
            $value->closed = $closedCount;
        }

        // Return the result as a JSON response
        return response()->json([
            'result' => $tickets
        ], 200);
    }
    public function store(Request $request)
    {
        Category::create($request->all());
        $tickets = Category::orderBy('id', 'desc')->get();
        foreach ($tickets as $key => $value) {
            $pendingCount = Ticket::where([['category_id', '=', $value->id], ['status', '=', 'Pending']])->count();
            $assignedCount = Ticket::where([['category_id', '=', $value->id], ['status', '=', 'Assigned']])->count();
            $onGoingCount = Ticket::where([['category_id', '=', $value->id], ['status', '=', 'Ongoing']])->count();
            $closedCount = Ticket::where([['category_id', '=', $value->id], ['status', '=', 'Closed']])->count();
            $value->pending = $pendingCount;
            $value->assigned = $assignedCount;
            $value->ongoing = $onGoingCount;
            $value->closed = $closedCount;
        }
        return response()->json([
            'result' => $tickets
        ], 200);
    }
    public function show(string $id)
    {
        $ticket = Category::where('id', $id)->first();
        return response()->json([
            'result' => $ticket
        ], 200);
    }

    public function update(Request $request, string $id)
    {
        $ticket = Category::where('id', $id)->first();
        $ticket->update($request->all());
        return response()->json([
            'result' => $ticket
        ], 200);
    }

    public function destroy(string $id)
    {
        $ticket = Category::where('id', $id)->first();
        $ticket->delete();
        return response()->json([
            'result' => $ticket
        ], 200);
    }
}
