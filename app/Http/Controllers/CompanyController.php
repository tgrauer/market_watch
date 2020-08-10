<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Util\IEXCloud;
use App\Traits\StockTraits;
use Session;
use Redirect;
use Carbon\Carbon;

class CompanyController extends Controller
{

    use StockTraits;

	protected $api;

    public function __construct(IEXCloud $api)
    {
    	$this->api = $api;
    }

    public function index($ticker)
    {

        $company_profile = $this->api->sendRequest('stock/'.$ticker.'/batch', 'types=company,quote,news,logo,chart&range=5d&last=10');

        $company_profile['quote']['marketCap'] = $this->abbreviate_number($company_profile['quote']['marketCap']);
        $company_profile['quote']['volume'] = $this->check_volume($company_profile['quote']['isUSMarketOpen'] !==null ? $company_profile['quote']['isUSMarketOpen'] : false, $company_profile['quote']['latestVolume'], $company_profile['quote']['previousVolume']);

        $analyst_ratings = $this->analyst_ratings($ticker);

        Session::put('ticker', $ticker);
        Session::put('company_name', $company_profile['quote']['companyName']);
        Session::put('latestPrice', $company_profile['quote']['latestPrice']);
        Session::put('changePercent', $company_profile['quote']['changePercent']);
        Session::put('change', $company_profile['quote']['change']);

        //gmdate("n-j-Y", 1596809885514)

        $data=[
            'company_profile'   => $company_profile,
            'analyst_ratings'   => $analyst_ratings,
            'page'              => 'company_profile',
        ];

    	// return view('company.company')->with($data);
        return view('company.company')->with($data); /// why doesnt this work
    }


    public function getCompanyDividends($ticker, $range){

        $company_dividends = $this->api->sendRequest('stock/'.$ticker.'/dividends/'.$range);        
        // $company_dividends = $this->api->sendRequest('time-series/advanced_dividends/AAPL', 'last=4');
        $data=[
            'company_dividends' => $company_dividends,
            'page'  => 'company_dividends'
        ];

        return view('company.dividends')->with($data);
    }

    public function getCompanyFinancials($ticker)
    {
        $company_financials = $this->api->sendRequest('stock/'.$ticker.'/financials');

        $data=[
            'company_financials' => $company_financials,
            'page' => 'company_financials'
        ];

        return view('company.financials')->with($data);
    }

    public function getCompanyInsiderTrades($ticker)
    {
        $company_insider_trades = $this->api->sendRequest('stock/'.$ticker.'/insider-transactions');

        $data=[
            'company_insider_trades' => $company_insider_trades,
            'page' => 'company_insider_trades'
        ];

        return view('company.insidertrades')->with($data);
    }

    public function analyst_ratings($ticker)
    {
        return $this->api->sendRequest('/stock/'.$ticker.'/recommendation-trends');
    }
}

// USE MARKET to query multiple companies
///stock/market/batch?symbols=aapl,fb,tsla&types=quote,news,chart&range=1m&last=5

/// TABS
//Analyst Recommendations   ///stock/{symbol}/recommendation-trends
// /stock/{symbol}/dividends/{range}
// /stock/{symbol}/financials/
// /stock/{symbol}/insider-transactions
// /stock/aapl/advanced-stats
// //time-series/advanced_dividends/{symbol?}/{refid?}
// /time-series/advanced_dividends/AAPL?last=4
