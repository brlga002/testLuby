<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NotesController;
use App\Http\Controllers\StudentsController;
use Illuminate\Support\Facades\Route;

Route::get('/tokenNoProvider', function (Request $request) {
    return response()->json(['message' => 'Token de acesso necessario'], 401);
})->name('login');

Route::apiResource('/students', StudentsController::class)->middleware('auth:sanctum');
Route::apiResource('/students.notes', NotesController::class)->shallow()->middleware('auth:sanctum');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
