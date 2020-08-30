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

        // $company_profile = $this->api->sendRequest('stock/'.$ticker.'/batch', 'types=company,quote,news,logo,chart&range=5d&last=10');
        $company_profile = $this->api->sendRequest('stock/'.$ticker.'/batch', 'types=company,quote,news,logo');
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
            'has_chart' => true,
            'css_file'=>'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/css/bootstrap-datepicker.min.css',
            'js_file'   => 'company.js',
            'company_profile'   => $company_profile,
            'advanced_stats'    => $advanced_stats,
            'page'              => 'company_profile',
        ];

        return view('company.company')->with($data);
    }

    public function build_stock_chart($ticker, $range='')
    {
        return $this->api->sendRequest('stock/'.$ticker.'/chart/'.$range);
    }

    public function update_stock_chart(Request $request){
        $ticker = $request->ticker;
        $range = $request->range;
        return $this->build_stock_chart($ticker, $range);
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

    public function getEarnings($ticker)
    {
        $last = 4;
        $company_earnings = $this->api->sendRequest('stock/'.$ticker.'/earnings/'.$last);

        $data=[
            'company_earnings' => $company_earnings,
            'page'  => 'company_earnings'
        ];

        return view('company.earnings')->with($data);
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

        $analyst_ratings = $this->getAnalystRatings($ticker);

        $data=[
            'analyst_ratings' => $analyst_ratings,
            'js_file'   => 'analystratings.js',
            'page' => 'analyst_ratings'
        ];

        return view('company.analystratings')->with($data);
    }

    public function getAnalystRatings($ticker){

        $analyst_ratings = $this->api->sendRequest('stock/'.$ticker.'/recommendation-trends');

        $rating_types = array ('ratingBuy', 'ratingOverweight', 'ratingHold', 'ratingUnderweight', 'ratingSell');
        $ratings_total = 0;
        $buy_total = 0;
        $buy_consensus = array();
        $current_ratings = array();
        $historic_ratings = array();
        $historic_dates = array();
        $strong_buy=array();
        $buy=array();
        $hold=array();
        $sell=array();
        $strong_sell=array();

        $return_array = array();
        $i=0;

        foreach ($analyst_ratings as $rating) {
            foreach ($rating as $key => $value) {
                    if($key=='consensusEndDate'){
                        if($value==null)
                        array_push($historic_dates, '');
                    }

                    for($j=0;$j<count($rating_types);$j++){
                        if($key == $rating_types[$j]){
                            if($i==0){
                                array_push($current_ratings, $value);
                            }
                            $ratings_total +=$value;
                            if($rating_types[$j] == 'ratingBuy' || $rating_types[$j] == 'ratingOverweight'){
                                $buy_total+=$value;
                            }

                            if($rating_types[$j] == 'ratingBuy'){array_push($strong_buy , $value);}
                            if($rating_types[$j] == 'ratingOverweight'){array_push($buy, $value);}
                            if($rating_types[$j] == 'ratingHold'){array_push($hold, $value);}
                            if($rating_types[$j] == 'ratingUnderweight'){array_push($sell, $value);}
                            if($rating_types[$j] == 'ratingSell'){array_push($strong_sell, $value);}
                        }
                    }

                if($key=='consensusEndDate'){array_push($historic_dates, $value);}
            }
            $i++;
        }

        $historic_ratings['strong_buy'] = $strong_buy;
        $historic_ratings['buy'] = $buy;
        $historic_ratings['hold'] = $hold;
        $historic_ratings['sell'] = $sell;
        $historic_ratings['strong_sell'] = $strong_sell;

        array_push($buy_consensus, $ratings_total);
        array_push($buy_consensus, $buy_total);

        $return_array['analyst_ratings_table'] = $analyst_ratings;
        $return_array['buy_consensus'] = round($buy_total / $ratings_total * 100);
        $return_array['current_ratings'] = $current_ratings;
        $return_array['historic_dates'] = $historic_dates;
        $return_array['historic_ratings']  = $historic_ratings;

        return $return_array;

    }

    public function advanced_stats($ticker)
    {
        return $this->api->sendRequest('/stock/'.$ticker.'/advanced-stats');
    }
}

// max All available data up to 15 years   Historically adjusted market-wide data
// 5y  Five years  Historically adjusted market-wide data
// 2y  Two years   Historically adjusted market-wide data
// 1y  One year    Historically adjusted market-wide data
// ytd Year-to-date    Historically adjusted market-wide data
// 6m  Six months  Historically adjusted market-wide data
// 3m  Three months    Historically adjusted market-wide data
// 1m  One month (default) Historically adjusted market-wide data
// 1mm One month   Historically adjusted market-wide data in 30 minute intervals
// 5d  Five Days   Historically adjusted market-wide data by day.
// 5dm Five Days   Historically adjusted market-wide data in 10 minute intervals
// date    Specific date   If used with the query parameter chartByDay, then this returns historical OHLCV data for that date. Otherwise, it returns data by minute for a specified date, if available. Date format YYYYMMDD. Currently supporting trailing 30 calendar days of minute bar data.
// dynamic One day Will return 1d or 1m data depending on the day or week and time of day. Intraday per minute data is only returned during market hours.

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
///stock/{symbol}/earnings/{last}/{field}
