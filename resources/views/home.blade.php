@extends('layouts.app')

@section('content')

{{-- <?php dd($news);?> --}}
{{-- <?php dd($todays_earnings['bto']);?> --}}
<div class="container">
    <div class="row">
        <div class="col-sm-8">
            
        </div>

        <div class="col-sm-4">
            <div class="todays_earnings card todays_earnings">
                <div class="card-header">
                    <h4>Today's Earnings</h4>
                </div>

                <div class="card-body">
                    <ul class="list-group">       

                        @php
                            $bto_earnings = $todays_earnings['bto'];
                            $amc_earnings = $todays_earnings['amc'];
                        @endphp

                        @foreach($bto_earnings as $ern)
                            @if($loop->index < 10)
                                <a class="list-group-item list-group-item-action" href="{{action('CompanyController@index', [$ern['symbol']])}}">{{$ern['quote']['companyName']}} - <span class="ticker">{{$ern['symbol']}}</span> <span class="price float-right">${{$ern['quote']['delayedPrice']}}</span></a> 
                            @endif
                        @endforeach

                        @foreach($amc_earnings as $ern)
                            @if($loop->index < 10)
                                <a class="list-group-item list-group-item-action" href="{{action('CompanyController@index', [$ern['symbol']])}}">{{$ern['quote']['companyName']}} - <span class="ticker">{{$ern['symbol']}}</span> <span class="price float-right">${{$ern['quote']['delayedPrice']}}</span></a> 
                            @endif
                        @endforeach

                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
