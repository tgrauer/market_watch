@extends('layouts.app')

@section('content')

{{-- <?php dd($data['company_financials']);?> --}}

<div class="container company_profile">
    <div class="row">
        <div class="col-xl-12 mt50">
            
            @include('company.shared.company_overview')
            
            @include('company.shared.company_nav')

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
