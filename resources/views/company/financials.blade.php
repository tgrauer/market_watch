@extends('layouts.app')

@section('content')

{{-- <?php dd($data['company_financials']);?> --}}

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
                
                @if(!empty($data['company_financials']))

                    <div class="tab-content mt30" id="nav-tabContent">                    
                        
                        <div class="tab-pane fade show active" id="nav-financials" role="tabpanel" aria-labelledby="nav-financials-tab">
                            <h4>Financials</h4>
                        </div>

                    </div>
                @endif
            </div>
        </div>
    </div>
@endsection
