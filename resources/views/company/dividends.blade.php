@extends('layouts.app')

@section('content')

{{-- <?php dd($data['company_dividends'][0]);?> --}}

<div class="container company_profile">
    <div class="row">
        <div class="col-xl-12 mt50">
            
            
                {{-- <h2 class="comp_name">{{$company_profile['company']['companyName']}} - {{$company_profile['company']['symbol']}}</h2>
                <h3 class="current_stock_price">
                    @money($company_profile['quote']['latestPrice'] * 100) 
                    <span class="latest_change {{$company_profile['quote']['changePercent'] * 100 > 0 ? 'positive' : 'negative'}}">@money($company_profile['quote']['change'] * 100) ({{round($company_profile['quote']['changePercent'] * 100, 2)}}%) {!! $company_profile['quote']['changePercent'] * 100 > 0 ? '<span class="positive"><i class="fa fa-arrow-up"></i></span>' : '<span class="negative"><i class="fa fa-arrow-down"></i></span>' !!}</span> --}}
                {{-- </h3> --}}

                @include('company.shared.company_nav')
                
                <div class="tab-content mt30" id="nav-tabContent">
                    
                    <div class="tab-pane fade show active" id="nav-dividends" role="tabpanel" aria-labelledby="nav-dividends-tab">
                        
                        @if(!empty($data['company_dividends']))
                            <h4>Dividends</h4>
                            <p>div info here</p>
                            {{-- {{ $data['company_dividends'][0]['exDate'] }}  --}}
                        @else
                            <div class="alert alert-info" role="alert">
                                Dividend History information is presently unavailable for this company. This could indicate that the company has never provided a dividend or that a dividend is pending.
                            </div>
                        @endif
                        
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
