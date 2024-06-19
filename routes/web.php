<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::get('/admin/dashboard', function () {
    return Inertia::render('admin/dashboard/page');
});
Route::get('/admin/it', function () {
    return Inertia::render('admin/it/page');
});
Route::get('/admin/tickets', function () {
    return Inertia::render('admin/tickets/page');
});
Route::get('/admin/category', function () {
    return Inertia::render('admin/category/page');
});
Route::get('/admin/feedback', function () {
    return Inertia::render('admin/feedback/page');
});

Route::get('/employee/it/dashboard', function () {
    return Inertia::render('employee/it/dashboard/page');
});
Route::get('/employee/it/tickets', function () {
    return Inertia::render('employee/it/tickets/page');
});
Route::get('/employee/it/feedback', function () {
    return Inertia::render('employee/it/feedback/page');
});

Route::get('/employee/users/dashboard', function () {
    return Inertia::render('employee/users/dashboard/page');
});
Route::get('/employee/users/tickets', function () {
    return Inertia::render('employee/users/tickets/page');
});
Route::get('/employee/users/feedback', function () {
    return Inertia::render('employee/users/feedback/page');
});

require __DIR__.'/auth.php';
