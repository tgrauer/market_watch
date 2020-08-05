@extends('layouts.app')

@section('content')

<?php dd($data);?>

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
                    <div class="tab-pane fade show active" id="nav-insidertrades" role="tabpanel" aria-labelledby="nav-insidertrades-tab">
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
