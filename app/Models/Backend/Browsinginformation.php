<?php

namespace App\Models\Backend;

use App\Domains\Auth\Models\User;
use App\Models\Url;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Browsinginformation extends Model
{
    use HasFactory;
    protected $table = 'browsing_information';
    public $timestamps = true;
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function url(){
        return $this->belongsTo(Url::class, 'url_id', 'id');
    }

}
