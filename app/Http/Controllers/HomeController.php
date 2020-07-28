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

    	return view('/home', compact('sector_performance', 'todays_earnings', 'news'));
    }

    public function get_sectors()
    {
    	return $this->home->get_sectors();
    }

    public function todays_earnings()
    {
    	return $this->home->todays_earnings();
    }

    public function get_news()
    {
    	return $this->home->get_news();
    }
}
