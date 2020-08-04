@extends('layouts.app')

@section('content')

{{-- <?php dd($company_profile);?> --}}

<div class="container company_profile">
    <div class="row">
        <div class="col-xl-12 mt50">
            
            @if(!empty($company_profile))
                <h2 class="comp_name">{{$company_profile['company']['companyName']}} - {{$company_profile['company']['symbol']}}</h2>
                <h3 class="current_stock_price">
                    @money($company_profile['quote']['latestPrice'] * 100) 
                    <span class="latest_change {{$company_profile['quote']['changePercent'] * 100 > 0 ? 'positive' : 'negative'}}">@money($company_profile['quote']['change'] * 100) ({{round($company_profile['quote']['changePercent'] * 100, 2)}}%) {!! $company_profile['quote']['changePercent'] * 100 > 0 ? '<span class="positive"><i class="fa fa-arrow-up"></i></span>' : '<span class="negative"><i class="fa fa-arrow-down"></i></span>' !!}</span>
                </h3>

                @include('company.shared.company_nav')

                <div class="tab-content mt30" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <h4>Profile</h4>

                        <div class="row">
                            <div class="col-sm-8">
                                <p>{{$company_profile['company']['description']}}</p>
                            </div>
                            
                            <div class="col-sm-4 company_details card">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Market Cap <span class="float-right">{{$company_profile['quote']['marketCap']}}</span></li>
                                    <li class="list-group-item">P/E Ratio <span class="float-right">{{$company_profile['quote']['peRatio']}}</span></li>
                                    <li class="list-group-item">Volume <span class="float-right">{{number_format($company_profile['quote']['volume'])}}</span></li>
                                    <li class="list-group-item">Average Volume <span class="float-right">{{number_format($company_profile['quote']['avgTotalVolume'])}}</span></li>
                                    <li class="list-group-item">52 Week High <span class="float-right">@money($company_profile['quote']['week52High'] * 100)</span></li>
                                    <li class="list-group-item">52 Week Low <span class="float-right">@money($company_profile['quote']['week52Low'] * 100)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-pane fade" id="nav-dividends" role="tabpanel" aria-labelledby="nav-dividends-tab">
                        <h4>Dividends</h4>
                        {{ $symbol ?? '' }} 
                    </div>
                    
                    <div class="tab-pane fade" id="nav-financials" role="tabpanel" aria-labelledby="nav-financials-tab">
                        <h4>Financials</h4>
                    </div>

                    <div class="tab-pane fade" id="nav-insidertrades" role="tabpanel" aria-labelledby="nav-insidertrades-tab">
                        <h4>Insider Transactions</h4>
                    </div>
                </div>
            @endif

            {{-- <div class="card">
                <div class="card-header"></div>
					
                <div class="card-body">
                    
                </div>
            </div> --}}

        </div>
    </div>
</div>
@endsection
