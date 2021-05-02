<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $students = Student::where('status', 1)->get();

        return response()->json(['students' => $students], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // if (!$request->nota) {
        //     return response()->json(['message' => 'a nota é obrigatória'], 400);
        // }

        $student = (new Student());
        $student->name = $request->name;
        $student->nMatricula = $request->nMatricula;
        $student->serie = $request->serie;
        $student->sexo = $request->sexo;
        $student->idade = $request->idade;
        $student->cpf = $request->cpf;
        $student->telefone = $request->telefone;
        $student->cep = $request->cep;
        $student->logradouro = $request->logradouro;
        $student->complemento = $request->complemento;
        $student->numero = $request->numero;
        $student->bairro = $request->bairro;
        $student->localidade = $request->localidade;
        $student->uf = $request->uf;
        $student->save();

        return response()->json(['message' => "Aluno salvo"], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'não encontrado'], 404);
        }

        return response()->json(['student' => $student], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'não encontrado'], 404);
        }

        $student->name = $request->name;
        $student->nMatricula = $request->nMatricula;
        $student->serie = $request->serie;
        $student->sexo = $request->sexo;
        $student->idade = $request->idade;
        $student->cpf = $request->cpf;
        $student->telefone = $request->telefone;
        $student->cep = $request->cep;
        $student->logradouro = $request->logradouro;
        $student->complemento = $request->complemento;
        $student->numero = $request->numero;
        $student->bairro = $request->bairro;
        $student->localidade = $request->localidade;
        $student->uf = $request->uf;
        $student->save();

        return response()->json(['message' => 'Salvo'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'não encontrado'], 404);
        }

        $student->status = '0';
        $student->save();

        return response()->json(['message' => 'deletado'], 200);
    }
}
