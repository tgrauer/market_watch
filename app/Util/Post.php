<?php
namespace App\Util;

use GuzzleHttp\Client;

class Post
{
	protected $client;

	public function __construct(Client $client)
	{
		$this->client = $client;
	}

	//public function load_home()
	//{
	//	return $this->endpointRequest(env('IEXCLOUD_BASE_URL').'stock/'.$ticker.'/batch?types=quote,news,chart&range=1m&last=10&token='.env('IEXCLOUD_API_KEY'));
	//}

	public function get_stock($ticker)
	{
		return $this->endpointRequest(env('IEXCLOUD_BASE_URL').'stock/'.$ticker.'/batch?types=quote,news,chart&range=1m&last=10&token='.env('IEXCLOUD_API_KEY'));
	}

	public function get_company_profile($ticker)
	{
		//return $this->endpointRequest(env('IEXCLOUD_BASE_URL').'stock/'.$ticker.'/batch?types=quote,news,chart&range=1m&last=10&token='.env('IEXCLOUD_API_KEY'));

		return $this->endpointRequest(env('IEXCLOUD_BASE_URL').'stock/'.$ticker.'/company?&token='.env('IEXCLOUD_API_KEY'));
	}

	public function get_sectors()
	{
		return $this->endpointRequest(env('IEXCLOUD_BASE_URL').'/stock/market/sector-performance/?token='.env('IEXCLOUD_API_KEY'));
	}

	public function todays_earnings()
	{
		return $this->endpointRequest(env('IEXCLOUD_BASE_URL').'/stock/market/today-earnings/?token='.env('IEXCLOUD_API_KEY'));

	}

	public function get_news()
	{
		return $this->endpointRequest(env('IEXCLOUD_BASE_URL').'/time-series/news/?token='.env('IEXCLOUD_API_KEY'));
	}

	// USE MARKET to query multiple companies
	///stock/market/batch?symbols=aapl,fb,tsla&types=quote,news,chart&range=1m&last=5
	

	// public function findById($id)
	// {
	// 	return $this->endpointRequest('/dummy/post/'.$id);
	// }

	public function endpointRequest($url)
	{
		try {
			$response = $this->client->request('GET', $url);
		} catch (\Exception $e) {
            return [];
		}

		return $this->response_handler($response->getBody()->getContents());
	}

	public function response_handler($response)
	{
		if ($response) {
			return json_decode($response, true);
		}
		
		return [];
	}
}