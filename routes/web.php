<?php

use Illuminate\Support\Facades\Route;
use GuzzleHttp\Client;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/stock', 'StockController@getStock');
Route::get('/company/{ticker}', 'CompanyController@index');
Route::get('/home/', 'HomeController@index');

Route::get('/', function () {
    return view('welcome');
});
