@extends('layouts.app')

@section('content')

<?php dd($company_profile);?>

<div class="container company_profile">
    <div class="row">
        <div class="col-xl-12 mt50">

            <h2 class="comp_name">{{$company_profile['company']['companyName']}} - {{$company_profile['company']['symbol']}}</h2>
            <h3 class="current_stock_price">
                @money($company_profile['quote']['latestPrice'] * 100) 
                <span class="latest_change {{$company_profile['quote']['changePercent'] * 100 > 0 ? 'positive' : 'negative'}}">@money($company_profile['quote']['change'] * 100) ({{round($company_profile['quote']['changePercent'] * 100, 2)}}%) {!! $company_profile['quote']['changePercent'] * 100 > 0 ? '<span class="positive"><i class="fa fa-arrow-up"></i></span>' : '<span class="negative"><i class="fa fa-arrow-down"></i></span>' !!}</span>
            </h3>

            <nav class="mt35">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="true">Profile</a>
                    <a class="nav-item nav-link" id="nav-dividends-tab" data-toggle="tab" href="#nav-dividends" role="tab" aria-controls="nav-dividends" aria-selected="false">Dividends</a>
                    <a class="nav-item nav-link" id="nav-financials-tab" data-toggle="tab" href="#nav-financials" role="tab" aria-controls="nav-financials" aria-selected="false">Financials</a>
                    <a class="nav-item nav-link" id="nav-insidertrades-tab" data-toggle="tab" href="#nav-insidertrades" role="tab" aria-controls="nav-insidertrades" aria-selected="false">Insider Transactions</a>
                </div>
            </nav>

            <div class="tab-content mt30" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <h4>Profile</h4>

                    <div class="row">
                        <div class="col-sm-7">
                            <p>{{$company_profile['company']['description']}}</p>
                        </div>
                        
                        <div class="col-sm-5 company_details card">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Market Cap @money($company_profile['quote']['marketCap'] * 100)</li>
                                <li class="list-group-item">P/E Ratio {{$company_profile['quote']['peRatio']}}</li>
                                <li class="list-group-item">Volume {{number_format($company_profile['quote']['volume'])}}</li>
                                <li class="list-group-item">Average Volume {{number_format($company_profile['quote']['avgTotalVolume'])}}</li>
                                <li class="list-group-item">52 Week High @money($company_profile['quote']['week52High'] * 100)</li>
                                <li class="list-group-item">52 Week Low @money($company_profile['quote']['week52Low'] * 100)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="tab-pane fade" id="nav-dividends" role="tabpanel" aria-labelledby="nav-dividends-tab">
                    <h4>Dividends</h4>
                </div>
                
                <div class="tab-pane fade" id="nav-financials" role="tabpanel" aria-labelledby="nav-financials-tab">
                    <h4>Financials</h4>
                </div>

                <div class="tab-pane fade" id="nav-insidertrades" role="tabpanel" aria-labelledby="nav-insidertrades-tab">
                    <h4>Insider Transactions</h4>
                </div>
            </div>

            {{-- <div class="card">
                <div class="card-header"></div>
					
                <div class="card-body">
                    
                </div>
            </div> --}}

        </div>
    </div>
</div>
@endsection
