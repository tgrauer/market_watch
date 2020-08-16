<?php

namespace App\Traits;

trait StockTraits {

	private function abbreviate_number($number)
	{
		
		if(empty($number)){
			return '';
		}
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

	private function convert_timestamp($timestamp)
	{
	    return gmdate("n-j-Y", $timestamp);
	}

	private function check_volume($isUSMarketOpen, $latestVolume, $previousVolume)
	{
	    if($isUSMarketOpen){
	        return $latestVolume;
	    }

	    return $previousVolume;
	}

}

?>