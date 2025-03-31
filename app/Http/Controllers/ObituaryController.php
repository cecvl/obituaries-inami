<?php

namespace App\Http\Controllers;

use App\Models\Obituary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ObituaryController extends Controller
{
    public function index(Request $request)
    {
        $obituaries = Obituary::query()
            ->orderBy('submission_date', 'desc')
            ->paginate(8); // 8 items per page for our 4x2 grid
            
        return inertia('ViewObituaries', [
            'obituaries' => $obituaries,
            'filters' => $request->only(['search']) // For future search functionality
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:100',
            'date_of_birth' => 'required|date|before_or_equal:today',
            'date_of_death' => 'required|date|after_or_equal:date_of_birth|before_or_equal:today',
            'content' => 'required|max:1000',
            'author' => 'required|max:100',
            'slug' => 'nullable|unique:obituaries,slug|max:255',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput()
                ->with('error', 'Please correct the errors below.');
        }

        $slug = $this->generateUniqueSlug($request);

        Obituary::create([
            'name' => $request->name,
            'date_of_birth' => $request->date_of_birth,
            'date_of_death' => $request->date_of_death,
            'content' => $request->content,
            'author' => $request->author,
            'slug' => $slug,
            'submission_date' => now(), // Ensure submission date is set
        ]);

        return redirect()->route('view-obituaries')
            ->with('success', 'Obituary submitted successfully.');
    }

    protected function generateUniqueSlug(Request $request): string
    {
        $slug = $request->slug ?? Str::slug($request->name);
        $originalSlug = $slug;
        $count = 1;

        while (Obituary::where('slug', $slug)->exists()) {
            $slug = "{$originalSlug}-{$count}";
            $count++;
        }

        return $slug;
    }
}
