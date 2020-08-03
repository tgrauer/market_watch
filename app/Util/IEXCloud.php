<?php
namespace App\Util;

use GuzzleHttp\Client;

class IEXCloud
{
	protected $client;
	protected $PRODUCTION_URL = 'https://cloud.iexapis.com/';
	protected $SANDBOX_URL = 'https://sandbox.iexapis.com/';
	protected $sandbox = FALSE;
	protected $version = 'stable';
    protected $baseURL;

	public function __construct(bool $sandbox = FALSE)
	{
		$this->sandbox = $sandbox;
		$this->setClient();
		$this->setBaseURL();
		// $this->client = $client;
	}

	protected function setClient() 
	{
        $this->client = new Client( [
            'base_uri' => $this->baseURL,
        ] );
    }

    protected function setBaseURL()
    {
    	if($this->sandbox){
    		$this->baseURL = $this->SANDBOX_URL;
    	}else{
    		$this->baseURL = $this->PRODUCTION_URL;
    	}
    }

	public function sendRequest($uri, $extra_params=null)
	{
		$extra_params = !empty($extra_params) ? '&'.$extra_params : '';
		$uri = env('IEXCLOUD_BASE_URL').$uri.'?token='.env('IEXCLOUD_API_KEY') . $extra_params;
		// return $uri;
		try {
			$response = $this->client->request('GET', $uri);
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