<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\User;

class UserController extends Controller
{
    public function user() {
        return view('user');
    }

    public function UserAPI() {
        $user = new User();
        $users = $user->getAll();
        return response()->json($users, 201);
    }
}
