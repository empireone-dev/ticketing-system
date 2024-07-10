<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Note extends Model
{
    use HasFactory;
    protected $fillable = [
        'ticket_id',
        'user_id',
        'notes',
    ];
    public function user(): HasOne
    {
        return $this->hasOne(User::class,'id','user_id');
    }
}
