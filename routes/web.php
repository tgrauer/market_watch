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

Route::get('/', 'HomeController@index');
Route::post('/search/{search_term}', 'HomeController@search');

Route::prefix('company')->group(function(){
	Route::get('/{ticker}', 'CompanyController@index');
	Route::get('/{ticker}/dividends/{range}', 'CompanyController@getCompanyDividends');
	Route::get('/stock/{ticker}/financials/', 'CompanyController@getCompanyFinancials');
	Route::get('/stock/{symbol}/insider-transactions', 'CompanyController@getCompanyInsiderTrades');
	Route::get('/stock/{symbol}/analyst_ratings', 'CompanyController@analystRatings');
	Route::get('/{symbol}/get_analyst_ratings', 'CompanyController@getAnalystRatings');
});


// Route::get('/stock/{symbol}/dividends/{range}', 'CompanyController@getDividends');

Route::get('/earnings/', 'EarningsController@index');
Route::get('/stock', 'StockController@getStock');