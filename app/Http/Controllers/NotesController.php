<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Models\Student;
use Illuminate\Http\Request;

class NotesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $notes = Note::get();

        return response()->json(['notes' => $notes], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $student)
    {
        if (!$request->nota) {
            return response()->json(['message' => 'a nota é obrigatória'], 400);
        }

        $currentStudent = Student::find($student);

        if (!$currentStudent) {
            return response()->json(['message' => 'não encontrado'], 404);
        }

        $nota = ($currentStudent->note) ? $currentStudent->note : (new Note());
        $nota->nota = $request->nota;
        $nota->resultado = ($request->nota > 5) ? 'aprovado' : 'reprovado';
        $nota->student_id = $student;
        $nota->save();

        return response()->json(['message' => "nota salva, o aluno esta " . $nota->resultado], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function show(Note $note)
    {
        return response()->json(['note' => $note], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Note $note)
    {
        $note->nota = $request->nota;
        $note->resultado = ($request->nota > 5) ? 'aprovado' : 'reprovado';
        $note->student_id = $student;
        $note->save();

        return response()->json(['message' => "nota salva, o aluno esta " . $note->resultado], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $note = Note::find($id);

        if (!$note) {
            return response()->json(['message' => 'não encontrado'], 404);
        }

        $note->delete();

        return response()->json(['message' => 'deletado'], 200);
    }
}
