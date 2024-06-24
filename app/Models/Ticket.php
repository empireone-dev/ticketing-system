<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Ticket extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'ticket_id',
        'category_id',
        'details',
        'assigned_to',
        'status',
        'others',
        'isUrgent',
    ];


    public function user(): HasOne
    {
        return $this->hasOne(user::class,'id','user_id');
    }
    public function assigned_to(): HasOne
    {
        return $this->hasOne(user::class,'id','assigned_to');
    }
    
}
