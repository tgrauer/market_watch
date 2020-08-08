@extends('layouts.app')

@section('content')

<?php dd($data);?>

<div class="container company_profile">
    <div class="row">
        <div class="col-xl-12 mt50">

            @include('company.shared.company_overview')
            
            @if(!empty($data['company_profile']))
                @include('company.shared.company_nav')

                <div class="tab-content mt30" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <h4>Profile</h4>

                        <div class="row">
                            <div class="col-sm-8">
                                <p>{{$data['company_profile']['company']['description']}}</p>
                            </div>
                            
                            <div class="col-sm-4 company_details card">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Market Cap <span class="float-right">{{$data['company_profile']['quote']['marketCap']}}</span></li>
                                    <li class="list-group-item">P/E Ratio <span class="float-right">{{$data['company_profile']['quote']['peRatio']}}</span></li>
                                    <li class="list-group-item">Volume <span class="float-right">{{number_format($data['company_profile']['quote']['volume'])}}</span></li>
                                    <li class="list-group-item">Average Volume <span class="float-right">{{number_format($data['company_profile']['quote']['avgTotalVolume'])}}</span></li>
                                    <li class="list-group-item">52 Week High <span class="float-right">@money($data['company_profile']['quote']['week52High'] * 100)</span></li>
                                    <li class="list-group-item">52 Week Low <span class="float-right">@money($data['company_profile']['quote']['week52Low'] * 100)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>
@endsection
