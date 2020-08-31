@extends('layouts.app')

@section('content')

{{-- <?php dd($advanced_stats);?> --}}

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

            <div class="col-sm-12 mt-5">
                @include('company.shared.company_overview')
            </div>

            <div class="col-sm-4 my-5">
                <div class="card px-2 pt-2 pb-0">
                    <ul class="list-group list-group-flush">
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
                            <h6 class="mb-0 pt-1"><b>Next Dividend Pay Date</b></h6>
                            <span class="float-right text-right">{{!empty($advanced_stats['nextDividendDate']) ? Carbon\Carbon::parse($advanced_stats['nextDividendDate'])->toFormattedDateString() : 'N/A'}}</span>
                        </div>
                    </ul>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="tab-content mt30" id="nav-tabContent">
                    
                    @if(!empty($company_dividends))                    
                        <div class="tab-pane fade show active" id="nav-dividends" role="tabpanel" aria-labelledby="nav-dividends-tab">
                            <div class="table-responsive">
                                <table class="table table-striped table-hover table-bordered dividend_table table-fixed">
                                    <thead>
                                        <tr class="bg-info">
                                            <th>Declared Date</th>
                                            <th>Amount</th>
                                            <th>Frequency</th>
                                            <th>Ex-Dividend Date</th>
                                            <th>Record Date</th>
                                            <th>Payment Date</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        @foreach($company_dividends as $div)
                                            <tr>
                                                <td>{{Carbon\Carbon::parse($div['declaredDate'])->isoFormat('M-D-Y')}}</td>
                                                <td>@money($div['amount'] * 100)</td>
                                                <td>{{$div['frequency']}}</td>
                                                <td>{{$div['exDate']}}</td>
                                                <td>{{Carbon\Carbon::parse($div['recordDate'])->isoFormat('M-D-Y')}}</td>
                                                <td>{{Carbon\Carbon::parse($div['paymentDate'])->isoFormat('M-D-Y')}}</td>
                                                <td>{{$div['description']}}</td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>                        
                        </div>

                    @else
                        <div class="alert alert-warning col-lg-6 col-sm-12" role="alert">
                            Dividend History information is presently unavailable for this company. This could indicate that the company has never provided a dividend or that a dividend is pending.
                        </div>
                    @endif

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
