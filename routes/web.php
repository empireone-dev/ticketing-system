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

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('change_password', function () {
        return Inertia::render('change_password/page');
    })->name('change_password');
});

Route::middleware('redirectBasedOnRole')->get('/', function () {
    return Inertia::render('login/page');
})->name('user.login');

Route::get('/logout', function () {
    return Inertia::render('logout');
})->name('tickets.logout');

Route::get('/send_credentials', function () {
   return view('mail.send_credentials');
})->name('email');

Route::middleware('auth:sanctum', 'role:1')->prefix('admin')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('admin/dashboard/page');
    })->name('admin.dashboard');

    Route::get('settings', function () {
        return Inertia::render('admin/settings/page');
    })->name('settings');
    
    Route::prefix('it')->group(function () {
        Route::get('', function () {
            return Inertia::render('admin/it/page');
        });
        Route::get('{id}', function () {
            return Inertia::render('admin/it/id/page');
        });
    });

    Route::prefix('users')->group(function () {
        Route::get('', function () {
            return Inertia::render('admin/users/page');
        });
        Route::get('{id}', function () {
            return Inertia::render('admin/it/id/page');
        });
    });

    Route::prefix('tickets')->group(function () {
        Route::get('', function () {
            return Inertia::render('admin/tickets/page');
        });
        Route::get('/{id}/activities', function () {
            return Inertia::render('admin/tickets/id/pages/activities/page');
        });
        Route::get('/{id}/details', function () {
            return Inertia::render('admin/tickets/id/pages/details/page');
        });
        Route::get('/{id}/files', function () {
            return Inertia::render('admin/tickets/id/pages/files/page');
        });
        Route::get('/{id}/notes', function () {
            return Inertia::render('admin/tickets/id/pages/notes/page');
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



Route::middleware('auth:sanctum', 'role:2')->prefix('employee/it')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('employee/it/dashboard/page');
    });
    Route::get('settings', function () {
        return Inertia::render('employee/it/settings/page');
    })->name('it.settings');
    Route::get('/feedback', function () {
        return Inertia::render('employee/it/feedback/page');
    });

    Route::prefix('tickets')->group(function () {
        Route::get('', function () {
            return Inertia::render('employee/it/tickets/page');
        });
        Route::get('/{id}/activities', function () {
            return Inertia::render('employee/it/tickets/id/pages/activities/page');
        });
        Route::get('/{id}/details', function () {
            return Inertia::render('employee/it/tickets/id/pages/details/page');
        });
        Route::get('/{id}/files', function () {
            return Inertia::render('employee/it/tickets/id/pages/files/page');
        });
        Route::get('/{id}/notes', function () {
            return Inertia::render('employee/it/tickets/id/pages/notes/page');
        });
    });
    
});


Route::middleware('auth:sanctum', 'role:3')->prefix('employee/users')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('employee/users/dashboard/page');
    });
    Route::get('settings', function () {
        return Inertia::render('employee/users/settings/page');
    })->name('users.settings');
    // Route::get('/feedback', function () {
    //     return Inertia::render('employee/users/feedback/page');
    // });

    Route::prefix('tickets')->group(function () {
        Route::get('', function () {
            return Inertia::render('employee/users/tickets/page');
        });
        Route::get('/{id}/activities', function () {
            return Inertia::render('employee/users/tickets/id/pages/activities/page');
        });
        Route::get('/{id}/details', function () {
            return Inertia::render('employee/users/tickets/id/pages/details/page');
        });
        Route::get('/{id}/files', function () {
            return Inertia::render('employee/users/tickets/id/pages/files/page');
        });
        Route::get('/{id}/notes', function () {
            return Inertia::render('employee/users/tickets/id/pages/notes/page');
        });
    });
    
});

require __DIR__ . '/auth.php';
