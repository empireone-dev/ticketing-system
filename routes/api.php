<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\OpenTicketNotidicationController;
use App\Http\Controllers\SendReportController;
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

Route::middleware('auth:sanctum')->get('/users', function (Request $request) {
    return $request->user();
});

Route::get('/send_reports', [SendReportController::class, 'send_reports']);
Route::get('/export_daily_report', [SendReportController::class, 'export_daily_report']);

Route::middleware('auth:sanctum')->group(function () {
    Route::resource('ticket', TicketController::class);
    Route::put('/update_ticket_status/{ticket_id}', [TicketController::class, 'update_ticket_status']);
    Route::get('/get_categories_by_category/{category}', [TicketController::class, 'get_categories_by_category']);
    Route::get('/get_ticket_by_user_id/{userid}', [TicketController::class, 'get_ticket_by_user_id']);
    Route::get('/search_ticket/{search}', [TicketController::class, 'search_ticket']);


    Route::post('/open_ticket_notification', [OpenTicketNotidicationController::class, 'open_ticket_notification']);


    Route::resource('user', UserController::class);
    Route::get('/get_user_by_position/{userid}', [UserController::class, 'get_user_by_position']);
    Route::resource('category', CategoryController::class);
    Route::resource('activity', ActivityController::class);
    Route::resource('note', NoteController::class);
    Route::resource('dashboard', DashboardController::class);
});
