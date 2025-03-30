<?php

namespace App\Http\Controllers;

use App\Models\Obituary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ObituaryController extends Controller
{
    public function index()
    {
        $obituaries = Obituary::orderBy('submission_date', 'desc')->get();
        return inertia('ViewObituaries', ['obituaries' => $obituaries]);
    }

    public function store(Request $request)
    {
        // Validate user input
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:100',  // Increased to match the form
            'date_of_birth' => 'required|date',
            'date_of_death' => 'required|date',
            'content' => 'required|max:1000', // Increased to match the form
            'author' => 'required|max:100',  // Increased to match the form
            'slug' => 'nullable|unique:obituary_platform,slug|max:255',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        // Ensure slug is unique, generate if missing
        $slug = $request->slug ?? Str::slug($request->name);
        if (Obituary::where('slug', $slug)->exists()) {
            $slug .= '-' . time(); // Append timestamp to avoid duplicates
        }

        // Create new obituary entry
        Obituary::create([
            'name' => $request->name,
            'date_of_birth' => $request->date_of_birth,
            'date_of_death' => $request->date_of_death,
            'content' => $request->content,
            'author' => $request->author,
            'slug' => Str::slug($request->name . '-' . time()),
        ]);

        return redirect()->route('view-obituaries')->with('success', 'Obituary submitted successfully.');
    }
}
