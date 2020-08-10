@extends('layouts.app')

@section('content')

{{-- <?php dd($data);?> --}}

<div class="d-flex wrapper">
    
    @include('company.shared.company_nav')

    <div class="container-fluid company_profile page_wrapper">
        
        <div class="row">
            <div class="col-sm-2">
                <button type="button" id="menu-toggle" class="close float-left" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        
        <div class="row">

            <div class="col-sm-12 mt50">
                @include('company.shared.company_overview')
            </div>

            <div class="col-sm-12">
                
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
</div>
@endsection
