@extends('layouts.app')

@section('content')

<?php dd($stock_info);?>

<div class="container">
    <div class="row justify-content-left">
        <div class="col-sm-8">
            <div class="card">
                <div class="card-header">ETFs</div>
					
                <div class="card-body">
                    <h2 class="comp_name">{{$stock_info['quote']['companyName']}} - <span class="ticker">{{$stock_info['quote']['symbol']}}</span></h2>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
