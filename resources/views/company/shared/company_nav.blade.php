<nav class="mt35">
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a 
        	class="nav-item nav-link {{$data['page'] == 'company_profile' ? 'active' : ''}}" 
        	id="nav-profile-tab" 
        	href="{{action('CompanyController@index', [Session::get('ticker')])}}" 
        	role="tab" 
        	aria-controls="nav-profile" 
        	aria-selected="{{$data['page'] == 'company_profile' ? 'true' : 'false'}}"
        >Profile</a>

        <a 
        	class="nav-item nav-link {{$data['page'] == 'company_dividends' ? 'active' : ''}}" 
        	id="nav-dividends-tab" 
        	 href="{{action('CompanyController@getCompanyDividends', [Session::get('ticker'), '1y'])}}" 
        	 role="tab" 
        	 aria-controls="nav-dividends" 
        	 aria-selected="{{$data['page'] == 'company_dividends' ? 'true' : 'false'}}"
        >Dividends</a>

        <a 
        	class="nav-item nav-link {{$data['page'] == 'company_financials' ? 'active' : ''}}" 
        	id="nav-financials-tab" 
        	href="{{action('CompanyController@getCompanyFinancials', [Session::get('ticker')])}}" 
        	role="tab" 
        	aria-controls="nav-financials" 
        	aria-selected="{{$data['page'] == 'company_financials' ? 'true' : 'false'}}"
        >Financials</a>

        <a 
        	class="nav-item nav-link {{$data['page'] == 'company_insider_trades' ? 'active' : ''}}" 
        	id="nav-insidertrades-tab" 
        	href="{{action('CompanyController@getCompanyInsiderTrades', [Session::get('ticker')])}}" 
        	role="tab" 
        	aria-controls="nav-insidertrades" 
        	aria-selected="{{$data['page'] == 'company_insider_trades' ? 'true' : 'false'}}"
        >Insider Transactions</a>
    </div>
</nav>