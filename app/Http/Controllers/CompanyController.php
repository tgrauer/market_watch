<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Util\IEXCloud;
use Session;
use Redirect;

class CompanyController extends Controller
{

	protected $api;

    public function __construct(IEXCloud $api)
    {
    	$this->api = $api;
    }

    public function index($ticker)
    {
        Session::put('ticker', $ticker);
        $company_profile = $this->api->sendRequest('stock/'.$ticker.'/batch', 'types=company,quote,news,chart&range=5d&last=10');

        $company_profile['quote']['marketCap'] = $this->abbreviate_number($company_profile['quote']['marketCap']);
        $company_profile['quote']['volume'] = $this->check_volume($company_profile['quote']['isUSMarketOpen'], $company_profile['quote']['latestVolume'], $company_profile['quote']['previousVolume']);
        $page = 'company_profile';

        $data=[
            'company_profile' => $company_profile,
            'page'  => $page
        ];

    	return view('company.company', compact('data'));
        // return view('company.company')->with($data); /// why doesnt this work
    }

    public function getCompanyDividends($ticker, $range){

        $range='1y';
        $company_dividends = $this->api->sendRequest('/stock/'.$ticker.'/dividends/'.$range);
        $page = 'company_dividends';
        
        $data=[
            'company_dividends' => $company_dividends,
            'page'  => $page
        ];

        return view('company.dividends', compact('data'));
    }

    public function getCompanyFinancials($ticker)
    {
        $company_financials = $this->api->sendRequest('/stock/'.$ticker.'/financials');
        $page = 'company_financials';

        $data=[
            'company_financials' => $company_financials,
            'page' => $page
        ];

        return view('company.financials', compact('data'));
    }

    public function getCompanyInsiderTrades($ticker)
    {
        $company_insider_trades = $this->api->sendRequest('/stock/'.$ticker.'/insider-transactions');
        $page = 'company_insider_trades';

        $data=[
            'company_insider_trades' => $company_insider_trades,
            'page' => $company_insider_trades
        ];

        return view('company.insidertrades', compact('data'));
    }

    private function check_volume($isUSMarketOpen, $latestVolume, $previousVolume)
    {
        if($isUSMarketOpen){
            return $latestVolume;
        }

        return $previousVolume;
    }

    private function abbreviate_number($number)
    {
        if ($number > 999 && $number < 1000000){
            $number_prefix = round($number/1000, 2);
            $number_suffix = "K";
        }

        if ($number > 999999 && $number < 1000000000){
            $number_prefix = round($number/1000000, 2);
            $number_suffix = "M";
        }

        if ($number > 999999999 && $number < 1000000000000){
            $number_prefix = round($number/1000000000, 2);
            $number_suffix = "B";
        }

        if ($number > 999999999999){
            $number_prefix = round($number/1000000000000, 2);
            $number_suffix = "T";
        }

        return $number_prefix . $number_suffix;
    }

}

// USE MARKET to query multiple companies
///stock/market/batch?symbols=aapl,fb,tsla&types=quote,news,chart&range=1m&last=5

/// TABS
// /stock/{symbol}/dividends/{range}
// /stock/{symbol}/financials/
// /stock/{symbol}/insider-transactions
