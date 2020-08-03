<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Util\IEXCloud;

class CompanyController extends Controller
{

	protected $api;

    public function __construct(IEXCloud $api)
    {
    	$this->api = $api;
    }

    public function index($ticker)
    {

        $company_profile = $this->api->sendRequest('stock/'.$ticker.'/batch', 'types=company,quote,news,chart&range=5d&last=10');

    	return view('/company', compact('company_profile'));
    }
}

// USE MARKET to query multiple companies
///stock/market/batch?symbols=aapl,fb,tsla&types=quote,news,chart&range=1m&last=5
