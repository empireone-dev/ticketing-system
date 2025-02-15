<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'site_id',
        'account_type',
        'position',
        'isOnline',
        'pending_count',
        'declined_count',
        'completed_count',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function closed()
    {
        return $this->hasMany(Ticket::class, 'assigned_to', 'id')
                    ->where('status', 'closed'); // Assuming 'status' indicates if the ticket is closed
    }
    
    // Optional: Create a separate method for counting
    public function closedCount(): int
    {
        return $this->closed()->count();
    }

    public function assigned()
    {
        return $this->hasMany(Ticket::class, 'assigned_to', 'id')
                    ->where('status', 'Assigned'); // Assuming 'status' indicates if the ticket is Assigned
    }
    
    // Optional: Create a separate method for counting
    public function assignedCount(): int
    {
        return $this->assigned()->count();
    }

    public function pending()
    {
        return $this->hasMany(Ticket::class, 'assigned_to', 'id')
                    ->where('status', 'Pending'); // Assuming 'status' indicates if the ticket is pending
    }
    
    // Optional: Create a separate method for counting
    public function pendingCount(): int
    {
        return $this->pending()->count();
    }

    public function declined()
    {
        return $this->hasMany(Ticket::class, 'assigned_to', 'id')
                    ->where('status', 'Declined'); // Assuming 'status' indicates if the ticket is declined
    }
    
    // Optional: Create a separate method for counting
    public function declinedCount(): int
    {
        return $this->declined()->count();
    }
}
