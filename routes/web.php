<?php


use App\Http\Controllers\ObituaryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/submit-obituary', function () {
    return inertia('SubmitObituary');
})->name('obituaries.create');

Route::post('/submit-obituary', [ObituaryController::class, 'store'])->name('obituaries.store');

Route::get('/view-obituaries', [ObituaryController::class, 'index'])->name('obituaries.index');
Route::get('/view-obituaries', [ObituaryController::class, 'index'])->name('view-obituaries');


