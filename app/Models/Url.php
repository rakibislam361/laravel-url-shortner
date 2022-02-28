<?php

namespace App\Models;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Url extends Model
{
    use HasFactory;
    protected $table = 'url';
    public $timestamps = true;
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
