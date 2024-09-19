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

    public function get_user_by_position($position)
    {
        $user = Auth::user();
        if ($user->id == 0) {
            // Fetch all users with the specified account_type and include closed ticket count
            $users = User::where('account_type', $position)
                         ->withCount(['closed','assigned','pending','declined']) // Use withCount to get the number of closed tickets
                         ->orderBy('name', 'desc')
                         ->paginate(10); // Optional: specify the page size
        } else {
            // Fetch users with the specified account_type and the same site_id as the logged-in user
            $users = User::where('account_type', $position)
                         ->where('site_id', $user->site_id)
                         ->withCount(['closed','assigned','pending','declined']) // Use withCount to get the number of closed tickets
                         ->orderBy('name', 'desc')
                         ->paginate(10);
        }
    
        return response()->json([
            'result' => $users
        ], 200);
    }
    
    
    public function index()
    {
        $user = Auth::user();
        $tickets = User::orderBy([['id', '=', 'desc'], ['site_id', '=', $user->site_id]])->paginate();
        return response()->json([
            'result' => $tickets
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
