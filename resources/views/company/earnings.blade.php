@extends('layouts.app')

@section('content')

{{-- <?php dd($company_earnings);?> --}}

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

            <div class="col-sm-12">
                
                @if(!empty($company_earnings['earnings']))

                    <div class="tab-content mt30" id="nav-tabContent">                    
                        <div class="tab-pane fade show active" id="nav-financials" role="tabpanel" aria-labelledby="nav-financials-tab">
                            <div class="table-responsive">
                                <table class="table table-striped table-hover table-bordered dividend_table">
                                    <thead>
                                        <tr class="bg-info">
                                            <th>Period</th>
                                            <th>Report Date</th>
                                            <th>Surprise</th>
                                            <th>Reported EPS</th>
                                            <th>Consensus Estimate</th>
                                            <th># of Estimates</th>
                                            <th>One Year Change</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        @foreach($company_earnings['earnings'] as $earnings)
                                            <tr>
                                                <td>{{$earnings['fiscalPeriod']}}</td>
                                                <td>{{$earnings['EPSReportDate']}}</td>
                                                <td>@money($earnings['EPSSurpriseDollar'] * 100)</td>
                                                <td>{{$earnings['actualEPS']}}</td>
                                                <td>{{$earnings['consensusEPS']}}</td>
                                                <td>{{$earnings['numberOfEstimates']}}</td>
                                                <td>{{$earnings['yearAgoChangePercent'] * 100}}</td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div> 
                        </div>
                    </div>
                @else
                    <div class="alert alert-warning col-lg-6 col-sm-12" role="alert">
                        Company earnings are not available or have not yet been reported.
                    </div>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection
