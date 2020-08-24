@extends('layouts.app')

@section('content')

{{-- <?php dd($company_insider_trades);?> --}}

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
                
                @if(!empty($company_insider_trades))

                    <div class="tab-content mt30" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-insidertrades" role="tabpanel" aria-labelledby="nav-insidertrades-tab">
                            @if(!empty($company_insider_trades))
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover table-bordered dividend_table">
                                        <thead>
                                            <tr class="bg-info">
                                                <th>Date</th>
                                                <th>Full Name</th>
                                                <th>Price</th>
                                                <th>Shares</th>
                                                <th>Value</th>
                                                <th>Direct / Indirect</th>
                                                <th>Transaction Code</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            @foreach($company_insider_trades as $trade)
                                                <tr>
                                                    <td>{{Carbon\Carbon::parse($trade['effectiveDate'])->isoFormat('M-D-Y')}}</td>
                                                    <td>{{$trade['fullName']}}</td>
                                                    <td>@money($trade['tranPrice'] * 100)</td>
                                                    <td>{{$trade['tranShares']}}</td>
                                                    <td>{{$trade['tranValue']}}</td>
                                                    <td>{{$trade['directIndirect']}}</td>
                                                    <td>{{$trade['tranCode']}}</td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
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
