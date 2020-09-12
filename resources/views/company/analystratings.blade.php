@extends('layouts.app')

@section('content')

<?php dd($analyst_ratings);?>

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
        </div>

        <div class="row mt-5">

            <div class="col-sm-3 analyst_ratings_chart">
                <h3 class="text-center">Buy Consensus</h3>
                <canvas id="buy_consensus"></canvas>
            </div>

            <div class="col-sm-4 analyst_ratings_chart">
                <h3 class="text-center">Current Analyst Rating</h3>
                <div class="cb" style="min-height:300px;">
                    <canvas id="current_analyst_ratings_chart" width="400" height=320"></canvas>
                </div>
            </div>

            <div class="col-sm-5 analyst_ratings_chart">
                <h3 class="text-center">Analyst Ratings by Month</h3>
                <div class="cb" style="min-height:300px;">
                    <canvas id="historic_analyst_ratings_chart" width="400" height="380"></canvas>
                </div>
            </div>            
        </div>

        <div class="row mt-5">
            <div class="col-sm-12">
                @if(!empty($analyst_ratings['analyst_ratings_table']))
                    <div class="tab-content mt30" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-insidertrades" role="tabpanel" aria-labelledby="nav-insidertrades-tab">

                            @if(!empty($analyst_ratings['analyst_ratings_table']))
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover table-bordered dividend_table">

                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Ratings Score <a class="ml-1" href="#" data-toggle="tooltip" data-placement="right" title="Score based on the consensus of broker recommendations"><i class="fa fa-question-circle"></i></a></th>
                                                <th>Strong Buy</th>
                                                <th>Buy</th>
                                                <th>Hold</th>
                                                <th>Sell</th>
                                                <th>Strong Sell</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            @foreach($analyst_ratings['analyst_ratings_table'] as $rating)
                                                <tr>
                                                    @php
                                                        $date = $rating['consensusEndDate'] ? $rating['consensusEndDate'] : $rating['consensusStartDate'];
                                                    @endphp
                                                    <td>{{Carbon\Carbon::parse($date)->isoFormat('M-D-Y')}}</td>
                                                    <td>{{$rating['ratingScaleMark']}}</td>
                                                    <td>{{$rating['ratingBuy']}}</td>
                                                    <td>{{$rating['ratingOverweight']}}</td>
                                                    <td>{{$rating['ratingHold']}}</td>
                                                    <td>{{$rating['ratingUnderweight']}}</td>
                                                    <td>{{$rating['ratingSell']}}</td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                                
                            @endif
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection
