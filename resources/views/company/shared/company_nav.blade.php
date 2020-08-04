<nav class="mt35">
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a class="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="{{action('CompanyController@index', [$company_profile['company']['symbol']])}}" role="tab" aria-controls="nav-profile" aria-selected="true">Profile</a>
        <a class="nav-ditem nav-lidnk" id="nav-dividends-tab" data-toggle="tadb" href="{{action('CompanyController@getCompanyDividends', [$company_profile['company']['symbol'], '1y'])}}" role="tab" aria-controls="nav-dividends" aria-selected="false">Dividends</a>
        <a class="nav-item nav-link" id="nav-financials-tab" data-toggle="tab" href="#nav-financials" role="tab" aria-controls="nav-financials" aria-selected="false">Financials</a>
        <a class="nav-item nav-link" id="nav-insidertrades-tab" data-toggle="tab" href="#nav-insidertrades" role="tab" aria-controls="nav-insidertrades" aria-selected="false">Insider Transactions</a>
    </div>
</nav>