@extends('layouts.app')

@section('content')

<?php dd($data);?>

<div class="container company_profile">
    <div class="row">
        <div class="col-xl-12 mt50">
            
            @include('company.shared.company_overview')
            
            @include('company.shared.company_nav')

            @if(!empty($data['company_dividends']))                
                <div class="tab-content mt30" id="nav-tabContent">
                    
                    <div class="tab-pane fade show active" id="nav-dividends" role="tabpanel" aria-labelledby="nav-dividends-tab">
                        
                        @if(!empty($data['company_dividends']))
                            <h4>Dividends</h4>
                        @else
                            <div class="alert alert-info" role="alert">
                                Dividend History information is presently unavailable for this company. This could indicate that the company has never provided a dividend or that a dividend is pending.
                            </div>
                        @endif
                        
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>
@endsection
