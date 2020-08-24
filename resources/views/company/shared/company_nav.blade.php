<!-- Sidebar -->
<div class="bg-light border-right" id="sidebar-wrapper">
    <div class="list-group list-group-flush">
        <a href="{{action('CompanyController@index', [Session::get('ticker')] ?? request()->ticker)}}" class="list-group-item {{$page == 'company_profile' ? 'active' : ''}} list-group-item-action ">Profile</a>
        <a href="{{action('CompanyController@getCompanyDividends', [Session::get('ticker') ?? request()->ticker, '5y'])}}" class="list-group-item list-group-item-action {{$page == 'company_dividends' ? 'active' : ''}}">Dividends</a>
        <a href="{{action('CompanyController@getCompanyFinancials', [Session::get('ticker') ?? request()->ticker])}}" class="list-group-item list-group-item-action {{$page == 'company_financials' ? 'active' : ''}}">Financials</a>
        <a href="{{action('CompanyController@getCompanyInsiderTrades', [Session::get('ticker') ?? request()->ticker])}}" class="list-group-item list-group-item-action {{$page == 'company_insider_trades' ? 'active' : ''}}">Insider Transactions</a>
        <a href="{{action('CompanyController@analystRatings', [Session::get('ticker') ?? request()->ticker])}}" class="list-group-item list-group-item-action {{$page == 'analyst_ratings' ? 'active' : ''}}">Analyst Ratings</a>
        <a href="#" class="list-group-item list-group-item-action ">Status</a>
    </div>
</div>
<!-- /#sidebar-wrapper -->
{{-- {{dd(request()->route()->parameters)}} --}}
{{-- {{ dd(Request::query('ticker')) }} --}}
{{-- {{request()->ticker}} --}}