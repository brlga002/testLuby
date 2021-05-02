<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::whereEmail($request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'Email: ' . $request->email . ' não localizado!'], 404);
        }

        if (!Hash::check($request->password, $user->password)) {
            return response()->json(['message' => __('As credenciais fornecidas estão incorretas!')], 401);
        }

        $token = $user->createToken('mobile')->plainTextToken;

        return response()->json(['accessToken' => $token]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Desconectado com sucesso!'], 200);
    }
}
