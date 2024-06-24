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

Route::prefix('admin')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('admin/dashboard/page');
    });
    Route::prefix('it')->group(function () {
        Route::get('', function () {
            return Inertia::render('admin/it/page');
        });
        Route::get('{id}', function () {
            return Inertia::render('admin/it/id/page');
        });
    });

    Route::prefix('tickets')->group(function () {
        Route::get('', function () {
            return Inertia::render('admin/tickets/page');
        });
        Route::get('/{id}', function () {
            return Inertia::render('admin/tickets/id/page');
        });
    });

    Route::prefix('category')->group(function () {
        Route::get('', function () {
            return Inertia::render('admin/category/page');
        });
        Route::get('/{id}', function () {
            return Inertia::render('admin/category/id/page');
        });
    });

    Route::get('feedback', function () {
        return Inertia::render('admin/feedback/page');
    });
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

require __DIR__ . '/auth.php';
