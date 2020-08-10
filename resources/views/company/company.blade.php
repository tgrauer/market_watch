@extends('layouts.app')

@section('content')

{{-- <?php dd($data);?> --}}

<div class="d-flex wrapper">
    
    @include('company.shared.company_nav')

    <div class="container-fluid company_profile page_wrapper">
        
        <div class="row">
            <div class="col-sm-2">
                <button type="button" id="menu-toggle" class="close float-left" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>

        <div class="row">
                
            <div class="col-sm-5 mt50">
                @include('company.shared.company_overview')
            </div>

            <div class="col-sm-7 mt50">
                <div class="row p0">
                    <div class="company_stock_highlights col-sm-3">
                        <div class="inner">
                            <h4>Market Cap</h4>
                        </div>
                    </div>

                    <div class="company_stock_highlights col-sm-3">
                        <div class="inner">
                            <h4>Market Cap</h4>
                        </div>
                    </div>

                    <div class="company_stock_highlights col-sm-3">
                        <div class="inner">
                            <h4>Market Cap</h4>
                        </div>
                    </div>

                    <div class="company_stock_highlights col-sm-3">
                        <div class="inner">
                            <h4>Market Cap</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                @if(!empty($company_profile))
                    
                    <div class="tab-content mt30" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <h4>Profile</h4>

                            <div class="row">
                                <div class="col-sm-8">
                                    <p>{{$company_profile['company']['description']}}</p>
                                </div>
                                
                                <div class="col-sm-4">
                                    <div class="company_details card">
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
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection
