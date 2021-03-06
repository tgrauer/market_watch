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
                
            <div class="col-md-5 mt-5">
                @include('company.shared.company_overview')
            </div>

            <div class="col-md-7 mt-5">
                <div class="row p0">
                    <div class="company_stock_highlights col-sm-3">
                        <div class="inner py-3 px-3">
                            <p class="text-left pt-1 mb-1">{{ $company_profile['quote']['marketCap'] ? '$'.$company_profile['quote']['marketCap'] : 'N/A'}}</p>
                            <h4 class="mb-2 text-left">Market Cap</h4>
                        </div>
                    </div>

                    <div class="company_stock_highlights col-sm-3">
                        <div class="inner py-3 px-3">
                            <p class="text-left pt-1 mb-1">{{$company_profile['quote']['peRatio'] ?? 'N/A'}}</p>
                            <h4 class="mb-2 text-left">P/E Ratio</h4>
                        </div>
                    </div>

                    <div class="company_stock_highlights col-sm-3">
                        <div class="inner py-3 px-3">
                            <p class="text-left pt-1 mb-1">{{$company_profile['quote']['volume'] ? number_format($company_profile['quote']['volume']) : 'N/A'}}</p>
                            <h4 class="mb-2 text-left">Volume</h4>
                        </div>
                    </div>

                    <div class="company_stock_highlights col-sm-3">
                        <div class="inner py-3 px-3">
                            <p class="text-left pt-1 mb-1">{{$company_profile['quote']['avgTotalVolume'] ? number_format($company_profile['quote']['avgTotalVolume']) : 'N/A'}}</p>
                            <h4 class="mb-2 text-left">Average Volume</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-3">

            @if($company_profile['quote']['low'] !== null && $company_profile['quote']['high'] !== null)
                <div class="col-md-3 col-sm-6 col-xs-12 mt-2 pl-3 pr-2 mr-2 range">
                    <div class="range_bar d-flex justify-content-start">
                        <div class="text-muted text-uppercase float-left font-weight-bold low text-left mr-1"><small>@money($company_profile['quote']['low'] * 100)</small></div>
                        
                        <div class="progress progress-xs mt-3 mb-3 float-left">
                            <div class="progress-bar bg-gradient-success" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-current="{{$company_profile['quote']['close']}}"></div>
                        </div>

                        <div class="text-muted text-uppercase font-weight-bold float-left high text-right ml-1"><small>@money($company_profile['quote']['high'] * 100)</small></div>
                    </div>

                    <div class="cb"><p class="text-center">Day Range</p></div>
                </div>
            @endif

            <div class="col-md-3 col-sm-6 col-xs-12 mt-2 pl-3 pr-2 ml-{{empty($company_profile['quote']['low']) ? '2' : '5'}} range">
                <div class="range_bar d-flex justify-content-start">
                    <div class="text-muted text-uppercase float-left font-weight-bold low text-left mr-1"><small>@money($company_profile['quote']['week52Low'] * 100)</small></div>
                    
                    <div class="progress progress-xs mt-3 mb-3 float-left">
                        <div class="progress-bar bg-gradient-success" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-current="{{$company_profile['quote']['latestPrice']}}"></div>
                    </div>

                    <div class="text-muted text-uppercase font-weight-bold float-left high text-right ml-1"><small>@money($company_profile['quote']['week52High'] * 100)</small></div>
                </div>

                <div class="cb"><p class="text-center">52 Week Range</p></div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                @if(!empty($company_profile))
                    
                    <div class="tab-content mt30" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                            <div class="row">
                                <div class="col-md-8">
                                    <div class="stock_chart">
                                        <div class="d-flex justify-content-between" id="controls" >
                                            <form action="#" class="form-inline">
                                                <div class="form-group float-left">
                                                    <label>From</label>
                                                    <div class="input-group ml-1">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="basic-addon1"><i class="fa fa-calendar"></i></span>
                                                        </div>
                                                        <input type="text" id="fromfield" class="form-control amcharts-input datepicker" />
                                                    </div>
                                                </div>

                                                <div class="form-group float-left ml-2">
                                                    <label>To</label>
                                                    <div class="input-group ml-1">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="basic-addon1"><i class="fa fa-calendar"></i></span>
                                                        </div>
                                                        <input type="text" id="tofield" class="form-control amcharts-input datepicker" />
                                                    </div>
                                                </div>
                                            </form>

                                            <div class=" mr-2">
                                                <button class="btn btn-sm btn-primary stockchart_date_btn" id="1m" class="amcharts-input">1m</button>
                                                <button class="btn btn-sm btn-primary stockchart_date_btn" id="3m" class="amcharts-input">3m</button>
                                                <button class="btn btn-sm btn-primary stockchart_date_btn" id="6m" class="amcharts-input">6m</button>
                                                <button class="btn btn-sm btn-primary stockchart_date_btn" id="1y" class="amcharts-input">1y</button>
                                                <button class="btn btn-sm btn-primary stockchart_date_btn" id="ytd" class="amcharts-input">YTD</button>
                                                <button class="btn btn-sm btn-primary stockchart_date_btn" id="max" class="amcharts-input">MAX</button>
                                            </div>
                                        </div>

                                        <div id="chartdiv"></div>
                                    </div>
                                </div>
                                
                                <div class="col-md-4">
                                    <div class="company_details card">
                                        <h4 class="px-3 pt-3">Company Profile</h4>
                                        <img src="{{$company_profile['logo']['url']}}" alt="" class="img-fluid mb-2">
                                        <p class="px-3">{{$company_profile['company']['description']}}</p>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Industry <span class="float-right text-right">{{$company_profile['company']['industry']}}</span></li>
                                            <li class="list-group-item">Sector <span class="float-right text-right">{{$company_profile['company']['sector']}}</span></li>
                                            <li class="list-group-item">Type <span class="float-right text-right">{{$company_profile['company']['issueType']}}</span></li>
                                            <li class="list-group-item">Website <span class="float-right text-right">{{$company_profile['company']['website']}}</span></li>
                                            <li class="list-group-item">CEO <span class="float-right text-right">{{$company_profile['company']['CEO']}}</span></li>
                                            <li class="list-group-item">Employees <span class="float-right text-right">{{$company_profile['company']['employees']}}</span></li>
                                            {{-- <li class="list-group-item">Address <span class="float-right text-right">{{$company_profile['company']['employees']}} <br>
                                                {{$company_profile['company']['city']}}, {{$company_profile['company']['state']}} {{$company_profile['company']['zip']}}</span>
                                            </li>
                                            <li class="list-group-item">Phone <span class="float-right text-right">{{$company_profile['company']['phone']}}</span></li> --}}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-md-8 key_data">
                <div class="col-sm-12 p-0"><h2 class="section_heading mb-4">Key Data</h2></div>
                
                <div class="row">
                    <div class="col-sm-6 mb-4">
                        <ul class="list-group list-group-flush">
                            <h4 class="font-weight-bold py-1 px-2">Dividends</h4>
                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Dividend Rate</h6>
                                <span class="float-right text-right">@money($advanced_stats['ttmDividendRate'] * 100)</span>
                            </div>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Dividend Yield</h6>
                                <span class="float-right text-right">{{round($advanced_stats['dividendYield'], 4) * 100 }}%</span>
                            </div>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Ex-Dividend Date</h6>
                                <span class="float-right text-right">{{Carbon\Carbon::parse($advanced_stats['exDividendDate'])->toFormattedDateString()}}</span>
                            </div>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Next Dividend Pay Date</h6>
                                <span class="float-right text-right">{{!empty($advanced_stats['nextDividendDate']) ? Carbon\Carbon::parse($advanced_stats['nextDividendDate'])->toFormattedDateString() : 'N/A'}}</span>
                            </div>
                        </ul>
                    </div>

                    <div class="col-sm-6 mb-4">
                        <ul class="list-group list-group-flush">

                            <h4 class="font-weight-bold py-1 px-2">Finances</h4>
                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Gross Profit <a href="#" data-toggle="tooltip" data-placement="right" title="Some tooltip text!"><i class="fa fa-question-circle"></i></a></h6>
                                <span class="float-right text-right">{{$advanced_stats['grossProfit'] ? '$'.$advanced_stats['grossProfit'] : 'N/A'}}</span>
                            </div>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Profit Margin <a href="#" data-toggle="tooltip" data-placement="right" title="Some tooltip text!"><i class="fa fa-question-circle"></i></a></h6>
                                <span class="float-right text-right">{{$advanced_stats['profitMargin'] ? round($advanced_stats['profitMargin'], 2) : 'N/A'}}</span>
                            </div>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Total Cash <a href="#" data-toggle="tooltip" data-placement="right" title="Some tooltip text!"><i class="fa fa-question-circle"></i></a></h6>
                                <span class="float-right text-right">{{$advanced_stats['totalCash'] ? '$'.$advanced_stats['totalCash'] : 'N/A'}}</span>
                            </div>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Revenue</h6>
                                <span class="float-right text-right">{{$advanced_stats['revenue'] ? '$'.$advanced_stats['revenue'] : 'N/A'}}</span>
                            </div>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Total Revenue</h6>
                                <span class="float-right text-right">{{$advanced_stats['totalRevenue'] ? '$'.$advanced_stats['totalRevenue'] : 'N/A'}}</span>
                            </div>
                        </ul>
                    </div>

                </div>

                <div class="row">
                    <div class="col-sm-6 mb-4">
                        <ul class="list-group list-group-flush">
                            <h4 class="font-weight-bold py-1 px-2">Sales &amp; Book Value</h4>
                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Price / Book</h6>
                                <span class="float-right text-right">{{$advanced_stats['debtToEquity'] ? round($advanced_stats['priceToBook'], 2) : 'N/A'}}</span>
                            </div>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Price / Sales</h6>
                                <span class="float-right text-right">{{$advanced_stats['debtToEquity'] ? round($advanced_stats['priceToSales'], 2) : 'N/A'}}</span>
                            </div>
                        </ul>
                    </div>

                    <div class="col-sm-6 mb-4">
                        <ul class="list-group list-group-flush">
                            <h4 class="font-weight-bold py-1 px-2">Debt</h4>
                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Current Debt</h6>
                                <span class="float-right text-right">{{$advanced_stats['currentDebt'] ? '$'.$advanced_stats['currentDebt'] :'N/A'}}</span>
                            </div>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Debt To Equity</h6>
                                <span class="float-right text-right">{{$advanced_stats['debtToEquity'] ? $advanced_stats['debtToEquity'].'%' : 'N/A'}}</span>
                            </div>
                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6 mb-4">
                        <ul class="list-group list-group-flush">
                            <h4 class="font-weight-bold py-1 px-2">Price to Earnings</h4>
                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Next Earnings Date</h6>
                                <span class="float-right text-right">{{$advanced_stats['nextEarningsDate'] ? Carbon\Carbon::parse($advanced_stats['nextEarningsDate'])->toFormattedDateString() :'N/A'}}</span>
                            </div>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">P/E Ratio</h6>
                                <span class="float-right text-right">{{$advanced_stats['peRatio'] ? $advanced_stats['peRatio'] : 'N/A'}}</span>
                            </div>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Forward P/E Ratio</h6>
                                <span class="float-right text-right">{{$advanced_stats['forwardPERatio'] ? $advanced_stats['forwardPERatio'] : 'N/A'}}</span>
                            </div>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">EBITDA</h6>
                                <span class="float-right text-right">{{$advanced_stats['EBITDA'] ? '$'. $advanced_stats['EBITDA'] : 'N/A'}}</span>
                            </div>
                        </ul>
                    </div>

                    <div class="col-sm-6 mb-4">
                        <ul class="list-group list-group-flush">
                            <h4 class="font-weight-bold py-1 px-2">Miscellaneous</h4>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Outstanding Shares</h6>
                                <span class="float-right text-right">{{$advanced_stats['sharesOutstanding'] ? $advanced_stats['sharesOutstanding'] : 'N/A'}}</span>
                            </div>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Market Cap</h6>
                                <span class="float-right text-right">{{$company_profile['quote']['marketCap'] ? '$'.$company_profile['quote']['marketCap'] : 'N/A'}}</span>
                            </div>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Beta</h6>
                                <span class="float-right text-right">{{$advanced_stats['beta'] ? round($advanced_stats['beta'], 2) : 'N/A'}}</span>
                            </div>

                            <div class="d-flex w-100 py-1 justify-content-between border-bottom">
                                <h6 class="mb-0 pt-1">Put/Call Ratio</h6>
                                <span class="float-right text-right">{{$advanced_stats['putCallRatio'] ? round($advanced_stats['putCallRatio'], 2) : 'N/A'}}</span>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="company_details card">
                    <h4 class="p-2 pl-3 m-0">News</h4>

                    <ul class="list-group list-group-flush company_news">
                        @foreach($company_profile['news'] as $news)
                            <li class="list-group-item px-3">
                                <span class="date">{{Carbon\Carbon::parse($news['datetime'])->toFormattedDateString()}}</span>
                                <h6 class="mt-2"><b>{{$news['headline']}}</b></h6>
                                
                                <div class="col-xs-3">
                                    <img src="{{$news['image']}}" alt="" class="img-fluid">
                                </div>

                                <div class="col-xs-9">
                                    <p class="mb-1">{{$news['summary']}}</p>
                                    <a class="float-right" target="_blank" href="{{$news['url']}}">Continue Reading</a>
                                </div>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>

    </div>
</div>
@endsection
