<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('ticket', TicketController::class);
Route::put('/update_ticket_status/{ticket_id}', [TicketController::class, 'update_ticket_status']);

Route::resource('user', UserController::class);
Route::resource('category', CategoryController::class);
Route::resource('activity', ActivityController::class);
Route::resource('note', NoteController::class);