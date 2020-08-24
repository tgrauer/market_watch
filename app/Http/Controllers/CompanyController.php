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
        $advanced_stats = $this->advanced_stats($ticker);

        $company_profile['quote']['marketCap'] = $this->abbreviate_number($company_profile['quote']['marketCap']);
        $company_profile['quote']['volume'] = $this->check_volume(isset($company_profile['quote']['isUSMarketOpen']) && $company_profile['quote']['isUSMarketOpen'] !==null ? $company_profile['quote']['isUSMarketOpen'] : false, $company_profile['quote']['latestVolume'], $company_profile['quote']['previousVolume']);

        //////////////////////////////////////////////////////////////
        // is there a better way to check if each of these exists
        //////////////////////////////////////////////////////////////
        isset($advanced_stats['currentDebt']) ? $advanced_stats['currentDebt'] = $this->abbreviate_number($advanced_stats['currentDebt']): '';
        $advanced_stats['revenue'] = $this->abbreviate_number($advanced_stats['revenue']);
        $advanced_stats['grossProfit'] = $this->abbreviate_number($advanced_stats['grossProfit']);
        $advanced_stats['totalRevenue'] = $this->abbreviate_number($advanced_stats['totalRevenue']);
        $advanced_stats['totalCash'] = $this->abbreviate_number($advanced_stats['totalCash']);
        $advanced_stats['sharesOutstanding'] = $this->abbreviate_number($advanced_stats['sharesOutstanding']);
        $advanced_stats['EBITDA'] = $this->abbreviate_number($advanced_stats['EBITDA']);

        Session::put('ticker', $ticker);
        Session::put('company_name', $company_profile['quote']['companyName']);
        Session::put('latestPrice', $company_profile['quote']['latestPrice']);
        Session::put('changePercent', $company_profile['quote']['changePercent']);
        Session::put('change', $company_profile['quote']['change']);

        //gmdate("n-j-Y", 1596809885514)

        $data=[
            'company_profile'   => $company_profile,
            'advanced_stats'    => $advanced_stats,
            'page'              => 'company_profile',
        ];

        return view('company.company')->with($data);
    }


    public function getCompanyDividends($ticker='redirect', $range){

        if($ticker != 'redirect'){
            $company_dividends = $this->api->sendRequest('stock/'.$ticker.'/dividends/'.$range);        
            // $company_dividends = $this->api->sendRequest('time-series/advanced_dividends/AAPL', 'last=4');
            $data=[
                'company_dividends' => $company_dividends,
                'page'  => 'company_dividends'
            ];

            return view('company.dividends')->with($data);
        }

        return view('home');
        
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

    public function analystRatings($ticker)
    {
        $analyst_ratings = $this->api->sendRequest('stock/'.$ticker.'/recommendation-trends');
        $data=[
            'analyst_ratings' => $analyst_ratings,
            'js_file'   => 'analystratings.js',
            'page' => 'analyst_ratings'
        ];

        return view('company.analystratings')->with($data);
    }

    public function getAnalystRatings($ticker){
        return $this->api->sendRequest('stock/'.$ticker.'/recommendation-trends');
    }

    public function advanced_stats($ticker)
    {
        return $this->api->sendRequest('/stock/'.$ticker.'/advanced-stats');
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
