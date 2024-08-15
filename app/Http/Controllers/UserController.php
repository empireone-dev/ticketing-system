<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function get_user_by_position($position){
        $users = User::where('position',$position)->orderBy('name', 'desc')->paginate();
        return response()->json([
            'result' =>$users
        ], 200);
    }
    public function index(){
        $tickets = User::orderBy('id', 'desc')->paginate();
        return response()->json([
            'result' => $tickets
        ], 200);
    }
    public function store(Request $request)
    {
         User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'position'=>$request->position,
            'site'=>$request->site,
            'password'=>Hash::make($request->password),
        ]);
        $ticket = User::orderBy('id', 'desc')->get();
        return response()->json([
            'result' => $ticket
        ], 200);
    }
    public function show(string $id)
    {
        $ticket = User::where('id',$id)->first();
        return response()->json([
            'result' => $ticket
        ], 200);
    }

    public function update(Request $request, string $id)
    {
        $ticket = User::where('id',$id)->first();
        $ticket->update($request->all());
        return response()->json([
            'result' => $ticket
        ], 200);
    }

    public function destroy(string $id)
    {
        $ticket = User::where('id',$id)->first();
        $ticket->delete();
        return response()->json([
            'result' => $ticket
        ], 200);
    }
}
