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

    public function abbreviate_number($number)
    {
        if ($number > 999 && $number < 1000000){
            $number_prefix = $number/1000;
            $number_suffix = "K";
        }

        if ($number > 999999 && $number < 1000000000){
            $number_prefix = $number/1000000;
            $number_suffix = "M";
        }

        if (number > 999999999 && number < 1000000000000){
            number_prefix = number/1000000000;
            number_suffix = "B";
        }

        if (number > 999999999999){
            number_prefix = number/1000000000000;
            number_suffix = "T";
        }

        return $number_prefix .' '.$number_suffix;
    }
}

// USE MARKET to query multiple companies
///stock/market/batch?symbols=aapl,fb,tsla&types=quote,news,chart&range=1m&last=5
