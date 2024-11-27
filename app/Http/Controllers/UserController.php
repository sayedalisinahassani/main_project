<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\HTTP\Resources\UserResource;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        return UserResource::collection($users);
    }

    public function show($id){
        $users = User::where('id', $id)->get();
        return response()->json($users);
    }
}
