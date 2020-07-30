<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Util\Post;

class HomeController extends Controller
{
    protected $home;

    public function __construct(POST $home)
    {
    	$this->home = $home;
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
    	return $this->home->search($request->search_term);
    }

    public function get_sectors()
    {
    	return $this->home->sectors();
    }

    public function todays_earnings()
    {
    	return $this->home->todays_earnings();
    }

    public function get_news()
    {
    	return $this->home->news();
    }

    public function get_unemployment_rate()
    {
    	return $this->home->unemployment_rate();
    }

    public function top_gainers()
    {
    	return $this->home->top_gainers();
    }

    public function top_losers()
    {
    	return $this->home->top_losers();
    }

    public function most_active()
    {
    	return $this->home->most_active();
    }
}
