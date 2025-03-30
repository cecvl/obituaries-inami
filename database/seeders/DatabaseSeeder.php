<?php

namespace Database\Seeders;

use App\Models\Obituary;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Create 10 obituary records
        Obituary::factory(10)->create();

        // Optional: Create a test user
        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
