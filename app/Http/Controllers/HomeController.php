<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Util\IEXCloud;
use Akaunting\Money\Currency;
use Akaunting\Money\Money;

class HomeController extends Controller
{
    protected $api;

    public function __construct(IEXCloud $api)
    {
    	$this->api = $api;
    }

    public function index()
    {

    	$sector_performance = $this->get_sectors();
    	$todays_earnings = $this->todays_earnings();
    	$news = $this->get_news();
    	$unemployment_rate = $this->get_unemployment_rate();
    	$top_gainers = $this->top_gainers();
    	$top_losers = $this->top_losers();
    	$most_active = $this->most_active();

    	$data = [
    		'news' => $news,
            'sector_performance' => $sector_performance,
            'todays_earnings' => $todays_earnings,
            'unemployment_rate' => $unemployment_rate,
            'top_gainers' => $top_gainers,
            'top_losers' => $top_losers,
            'most_active' => $most_active
        ];

        return view('home')->with($data);
    }

    public function search(Request $request)
    {
        $search_term = $request->search_term;
    	return $this->api->sendRequest('search/'.$search_term);
    }

    public function get_sectors()
    {
        return $this->api->sendRequest('/stock/market/sector-performance');
    }

    public function todays_earnings()
    {
    	return $this->api->sendRequest('/stock/market/today-earnings/');
    }

    public function get_news()
    {
    	return $this->api->sendRequest('/time-series/news/');
    }

    public function get_unemployment_rate()
    {
        return $this->api->sendRequest('/data-points/market/UNRATE/');
    }

    public function top_gainers()
    {
    	return $this->api->sendRequest('/stock/market/list/gainers/', 'displayPercent=true');
    }

    public function top_losers()
    {
    	return $this->api->sendRequest('/stock/market/list/losers/', 'displayPercent=true');
    }

    public function most_active()
    {
    	return $this->api->sendRequest('/stock/market/list/most_active/', 'displayPercent=true');
    }
}
