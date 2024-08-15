<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, $position)
    {
        if (!$request->user() || !$this->checkRole($request->user()->position, $position)) {
            return Inertia::location(route('user.login')); 
        }

        return $next($request);
    }

    private function checkRole($userRoleId, $requiredRoleId)
    {
        // Define your logic for checking the role here
        return $userRoleId == $requiredRoleId;
    }
}
