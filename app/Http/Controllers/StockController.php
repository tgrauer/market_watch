<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Util\Post;

class StockController extends Controller
{
    protected $stock;

    public function __construct(POST $stock)
    {
    	$this->stock = $stock;
    }

    public function getStock()
    {
    	$ticker = 'AAPL';
    	$stock_info = $this->stock->get_stock($ticker);

    	return view('/stock', compact('stock_info'));
    }

    // public function show($id)
    // {
    // 	$post = $this->post->findById($id);

    // 	return view('someview', compact('post'));
    // }
}
