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

            <div class="col-sm-12">
                
                @if(!empty($analyst_ratings))

                    <div class="tab-content mt30" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-insidertrades" role="tabpanel" aria-labelledby="nav-insidertrades-tab">
                            @if(!empty($analyst_ratings))
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover table-bordered dividend_table">
                                        <tbody>
                                            @foreach($analyst_ratings as $rating)
                                                <tr>
                                                    @php
                                                        $date = $rating['consensusEndDate'] ? $rating['consensusEndDate'] : $rating['consensusStartDate'];
                                                    @endphp
                                                    <td>{{Carbon\Carbon::parse($date)->isoFormat('M-D-Y')}}</td>
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
