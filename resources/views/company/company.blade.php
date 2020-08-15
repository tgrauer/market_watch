@extends('layouts.app')

@section('content')

{{-- <?php dd($company_profile);?> --}}

<div class="d-flex wrapper">
    
    @include('company.shared.company_nav')

    <div class="container-fluid company_profile page_wrapper">

        <div class="row">
            <div class="col-sm-2">
                <button type="button" id="menu-toggle" class="close sidemenu_btn float-left mt-2 mb-0" aria-label="Close">
                    <span><i class="fa fa-bars"></i></span>
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
                        <div class="inner py-3 px-3">
                            <p class="text-left pt-1 mb-1">{{$company_profile['quote']['marketCap']}}</p>
                            <h4 class="mb-2 text-left">Market Cap</h4>
                        </div>
                    </div>

                    <div class="company_stock_highlights col-sm-3">
                        <div class="inner py-3 px-3">
                            <p class="text-left pt-1 mb-1">{{$company_profile['quote']['peRatio']}}</p>
                            <h4 class="mb-2 text-left">P/E Ratio</h4>
                        </div>
                    </div>

                    <div class="company_stock_highlights col-sm-3">
                        <div class="inner py-3 px-3">
                            <p class="text-left pt-1 mb-1">{{number_format($company_profile['quote']['volume'])}}</p>
                            <h4 class="mb-2 text-left">Volume</h4>
                        </div>
                    </div>

                    <div class="company_stock_highlights col-sm-3">
                        <div class="inner py-3 px-3">
                            <p class="text-left pt-1 mb-1">{{number_format($company_profile['quote']['avgTotalVolume'])}}</p>
                            <h4 class="mb-2 text-left">Average Volume</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-3 col-xs-12 mt-2 px-2 range">
                <div class="range_bar d-flex justify-content-center">
                    <div class="text-muted text-uppercase float-left font-weight-bold low text-left mr-1"><small>@money($company_profile['quote']['week52Low'] * 100)</small></div>
                    
                    <div class="progress progress-xs mt-3 mb-3 float-left">
                        <div class="progress-bar bg-gradient-success" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-current="{{$company_profile['quote']['latestPrice']}}"></div>
                    </div>

                    <div class="text-muted text-uppercase font-weight-bold float-left high text-right ml-1"><small>@money($company_profile['quote']['week52High'] * 100)</small></div>
                </div>
                <div class="cb"><p class="text-center">52 Week Range</p></div>

            </div>

            <div class="col-sm-12">
                @if(!empty($company_profile))
                    
                    <div class="tab-content mt30" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <h4>Company Profile</h4>

                            <div class="row">
                                <div class="col-sm-8">
                                    <p>{{$company_profile['company']['description']}}</p>

                                    <section class="my-4">
                                        <h2 class="section_heading">Key Data</h2>
                                    </section>
                                </div>
                                
                                <div class="col-sm-4">
                                    <div class="company_details card">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">{{$company_profile['company']['companyName']}}</li>
                                            <li class="list-group-item">Industry <span class="float-right text-right">{{$company_profile['company']['industry']}}</span></li>
                                            <li class="list-group-item">Sector <span class="float-right text-right">{{$company_profile['company']['sector']}}</span></li>
                                            <li class="list-group-item">Website <span class="float-right text-right">{{$company_profile['company']['website']}}</span></li>
                                            <li class="list-group-item">CEO <span class="float-right text-right">{{$company_profile['company']['CEO']}}</span></li>
                                            <li class="list-group-item">Employees <span class="float-right text-right">@money($company_profile['company']['employees'] * 100)</span></li>
                                            <li class="list-group-item">Address <span class="float-right text-right">{{$company_profile['company']['employees']}} <br>
                                                {{$company_profile['company']['city']}}, {{$company_profile['company']['state']}} {{$company_profile['company']['zip']}}</span>
                                            </li>
                                            <li class="list-group-item">Phone <span class="float-right text-right">{{$company_profile['company']['phone']}}</span></li>
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
