<?php

namespace Database\Factories;

use App\Models\Obituary;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ObituaryFactory extends Factory
{
    protected $model = Obituary::class;

    public function definition()
    {
        $name = $this->faker->name;
        return [
            'name' => $name,
            'date_of_birth' => $this->faker->date(),
            'date_of_death' => $this->faker->date(),
            'content' => $this->faker->paragraph(2),
            'author' => $this->faker->name,
            'slug' => Str::slug($name . '-' . time()),
        ];
    }


}
