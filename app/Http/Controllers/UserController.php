<?php

namespace App\Http\Controllers;

use App\Mail\SendCredentials;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{

    public function change_site(Request $request){
       $user = User::where('id', $request->id)->first();
       if ($user) {
        $user->update([
            'site_id'=>$request->site_id
        ]);
       }
    }
    public function get_user_by_position($position)
    {
        $user = Auth::user();
        if ($user->id == 0) {
            // Fetch all users with the specified account_type and include closed ticket count
            $users = User::where('account_type', $position)
                ->withCount(['closed', 'assigned', 'pending', 'declined']) // Use withCount to get the number of closed tickets
                ->orderBy('name', 'desc')->get(); // Optional: specify the page size
        } else {
            // Fetch users with the specified account_type and the same site_id as the logged-in user
            $users = User::where('account_type', $position)
                ->where('site_id', $user->site_id)
                ->withCount(['closed', 'assigned', 'pending', 'declined']) // Use withCount to get the number of closed tickets
                ->orderBy('name', 'desc')->get();
        }

        return response()->json([
            'result' => $users
        ], 200);
    }


    public function index(Request $request)
    {
        $query = $request->input('query', '');
        $perPage = $request->input('per_page', 10);
        $user = Auth::user();

        // Build the query based on user site_id
        $queryBuilder = User::query();

        if ($user->id !== 0) {
            $queryBuilder->where('site_id', $user->site_id);
        }

        // Add search functionality
        if ($query) {
            $queryBuilder->where(function ($q) use ($query) {
                $q->where('name', 'like', '%' . $query . '%')
                    ->orWhere('email', 'like', '%' . $query . '%'); // Adjust fields as needed
            });
        }

        $users = $queryBuilder
            ->orderBy('id', 'desc') // Sort results in descending order based on id
            ->paginate($perPage);

        return response()->json([
            'result' => $users
        ], 200);
    }



    public function store(Request $request)
    {
        $user = Auth::user();
        $user_account =  User::create([
            'name' => $request->name,
            'site_id' => $request->user_id == 0 ? $request->site_id :  $user->site_id,
            'email' => $request->email,
            'account_type' => $request->account_type,
            'position' => $request->position,
            'password' => Hash::make('Business12'),
        ]);
        $ticket = User::orderBy('id', 'desc')->get();

        Mail::to($request->email)->send(new SendCredentials($request->all()));
        return response()->json([
            'result' => $ticket
        ], 200);
    }
    public function show(string $id)
    {
        $ticket = User::where('id', $id)->first();
        return response()->json([
            'result' => $ticket
        ], 200);
    }

    public function update(Request $request, string $id)
    {
        $ticket = User::where('id', $id)->first();
        $ticket->update($request->all());
        return response()->json([
            'result' => $ticket
        ], 200);
    }

    public function destroy(string $id)
    {
        $ticket = User::where('id', $id)->first();
        $ticket->delete();
        return response()->json([
            'result' => $ticket
        ], 200);
    }
}
