<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $ticket = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'position'=>$request->position,
            'password'=>Hash::make($request->password),
        ]);
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
