<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Ticket extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'ticket_id',
        'category_id',
        'site_id',
        'details',
        'station',
        'assigned_to',
        'status',
        'others',
        'isUrgent',
        'start',
        'end',
    ];


    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
    public function assigned_to(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'assigned_to');
    }
    public function assigned(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'assigned_to');
    }
    public function category(): HasOne
    {
        return $this->hasOne(Category::class, 'id', 'category_id');
    }
    public function files(): HasMany
    {
        return $this->hasMany(File::class, 'ticket_id');
    }
    public function notes(): HasMany
    {
        return $this->hasMany(Note::class, 'ticket_id');
    }
}
