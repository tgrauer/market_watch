<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Util\Post;

class CompanyController extends Controller
{

	protected $company;

    public function __construct(POST $company)
    {
    	$this->company = $company;
    }

    public function index($ticker)
    {

    	$company_profile = $this->company->get_company_profile($ticker);

    	return view('/company', compact('company_profile'));
    }
}
