<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Obituary extends Model
{
    use HasFactory;
    protected $table = 'obituary_platform';

    protected $fillable = [
        'name',
        'date_of_birth',
        'date_of_death',
        'content',
        'author',
        'slug',
    ];

    protected $dates = [
        'date_of_birth',
        'date_of_death',
        'submission_date',
        'created_at',
        'updated_at'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($obituary) {
            $obituary->slug = \Illuminate\Support\Str::slug($obituary->name . ' ' . uniqid());
        });
    }
}
