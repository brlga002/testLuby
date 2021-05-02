<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $with = ['note'];

    public function note()
    {
        return $this->hasOne(Note::class);
    }
}
