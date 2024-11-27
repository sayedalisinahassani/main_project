<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use Illuminate\Http\Request;
use App\Http\Resources\SaleResource; // Correct capitalization

class SaleController extends Controller
{
    public function index()
    {
        $users = Sale::all();

        return SaleResource::collection($users);
    }
    public function show($id){
        $users = Sale::where('id', $id)->get();
        return response()->json($users);
    }
}


