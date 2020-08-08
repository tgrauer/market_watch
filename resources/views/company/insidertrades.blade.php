@extends('layouts.app')

@section('content')

{{-- <?php dd($data['company_insider_trades']);?> --}}

<div class="container company_profile">
    <div class="row">
        <div class="col-xl-12 mt50">
            
            @include('company.shared.company_overview')
            
            @include('company.shared.company_nav')

            @if(!empty($data['company_insider_trades']))

                <div class="tab-content mt30" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-insidertrades" role="tabpanel" aria-labelledby="nav-insidertrades-tab">
                        <h4>Insider Transactions</h4>
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>
@endsection
