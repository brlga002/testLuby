<?php

use App\Http\Controllers\NotesController;
use App\Http\Controllers\StudentsController;
use Illuminate\Support\Facades\Route;

Route::apiResource('/students', StudentsController::class);
Route::apiResource('/students.notes', NotesController::class)->shallow();
