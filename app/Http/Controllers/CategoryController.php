<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Ticket;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Request $request)
    {

        $perPage = $request->input('per_page', 10);

        // Fetch all categories
        $categories = Category::all();

        // Iterate through each category and count the tickets associated with it
        foreach ($categories as $category) {
            $pendingCount = Ticket::where([['category_id', '=', $category->id], ['status', '=', 'Pending']])->count();
            $assignedCount = Ticket::where([['category_id', '=', $category->id], ['status', '=', 'Assigned']])->count();
            $onGoingCount = Ticket::where([['category_id', '=', $category->id], ['status', '=', 'Ongoing']])->count();
            $closedCount = Ticket::where([['category_id', '=', $category->id], ['status', '=', 'Closed']])->count();
            $category->pending = $pendingCount;
            $category->assigned = $assignedCount;
            $category->ongoing = $onGoingCount;
            $category->closed = $closedCount;
            $category->total = $pendingCount + $assignedCount + $onGoingCount + $closedCount;
        }

        // Sort categories by total in descending order
        $sortedCategories = $categories->sortByDesc('total')->values();

        // Paginate the sorted categories
        $paginatedCategories = new \Illuminate\Pagination\LengthAwarePaginator(
            $sortedCategories->forPage($request->input('page', 1), $perPage),
            $sortedCategories->count(),
            $perPage,
            $request->input('page', 1),
            ['path' => $request->url(), 'query' => $request->query()]
        );

        // Return the result as a JSON response
        return response()->json([
            'result' => $paginatedCategories,
            'categories'=>$categories
        ], 200);
    }
    public function store(Request $request)
    {
        Category::create($request->all());
        $perPage = $request->input('per_page', 10);

        // Fetch all categories
        $categories = Category::all();

        // Iterate through each category and count the tickets associated with it
        foreach ($categories as $category) {
            $pendingCount = Ticket::where([['category_id', '=', $category->id], ['status', '=', 'Pending']])->count();
            $assignedCount = Ticket::where([['category_id', '=', $category->id], ['status', '=', 'Assigned']])->count();
            $onGoingCount = Ticket::where([['category_id', '=', $category->id], ['status', '=', 'Ongoing']])->count();
            $closedCount = Ticket::where([['category_id', '=', $category->id], ['status', '=', 'Closed']])->count();
            $category->pending = $pendingCount;
            $category->assigned = $assignedCount;
            $category->ongoing = $onGoingCount;
            $category->closed = $closedCount;
            $category->total = $pendingCount + $assignedCount + $onGoingCount + $closedCount;
        }

        // Sort categories by total in descending order
        $sortedCategories = $categories->sortByDesc('total')->values();

        // Paginate the sorted categories
        $paginatedCategories = new \Illuminate\Pagination\LengthAwarePaginator(
            $sortedCategories->forPage($request->input('page', 1), $perPage),
            $sortedCategories->count(),
            $perPage,
            $request->input('page', 1),
            ['path' => $request->url(), 'query' => $request->query()]
        );
        return response()->json([
            'result' => $paginatedCategories
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
