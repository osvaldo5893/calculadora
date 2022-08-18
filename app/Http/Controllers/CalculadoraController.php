<?php

namespace App\Http\Controllers;

use App\Models\calculadora;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CalculadoraController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Calculadora/Mostrar');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\calculadora  $calculadora
     * @return \Illuminate\Http\Response
     */
    public function show(calculadora $calculadora)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\calculadora  $calculadora
     * @return \Illuminate\Http\Response
     */
    public function edit(calculadora $calculadora)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\calculadora  $calculadora
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, calculadora $calculadora)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\calculadora  $calculadora
     * @return \Illuminate\Http\Response
     */
    public function destroy(calculadora $calculadora)
    {
        //
    }
}
