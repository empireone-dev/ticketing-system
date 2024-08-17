<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
class RedirectBasedOnRole
{
    public function handle(Request $request, Closure $next)
    {
        $account = $request->user(); 
        if ($account) {
            if ($account->account_type == 1) {
                return redirect('/admin/dashboard');
            } else if ($account->account_type == 2) {
                return redirect('/employee/it/dashboard');
            } else if ($account->account_type == 3) {
                return redirect('/employee/users/dashboard');
            } 
        }


        return $next($request);
    }
}
