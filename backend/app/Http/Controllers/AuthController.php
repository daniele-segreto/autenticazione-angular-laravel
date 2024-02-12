<?php


namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Implementa la logica per la registrazione dell' utente
        // Validazione dei dati inseriti dall'utente
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users|max:255',
            'password' => 'required|string|min:8|max:255',
        ]);


        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }


        // Creazione dell'utente
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);


        return response()->json(['message' => 'Utente registrato con successo'], 201);
    }


    public function login(Request $request)
    {
        // Implementa la logica per l'autenticazione dell'utente
        // Validazione dei dati inseriti dall'utente
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8|max:255',
        ]);


        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }


        // Tentativo di autenticazione
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken('AuthToken')->accessToken;


            return response()->json(['token' => $token], 200);
        } else {
            return response()->json(['message' => 'Credenziali non valide'], 401);
        }
    }


    public function logout()
    {
        Auth::logout();


        return response()->json(['message' => 'Logout effettuato con successo'], 200);
    }
}
