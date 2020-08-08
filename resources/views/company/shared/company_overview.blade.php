<h2 class="comp_name">{{Session::get('company_name')}} - {{Session::get('ticker')}}</h2>
<h3 class="current_stock_price">
    @money(Session::get('latestPrice') * 100) 
    <span class="latest_change {{Session::get('changePercent') * 100 > 0 ? 'positive' : 'negative'}}">@money(Session::get('change') * 100) ({{round(Session::get('changePercent') * 100, 2)}}%) {!! Session::get('changePercent') * 100 > 0 ? '<span class="positive"><i class="fa fa-arrow-up"></i></span>' : '<span class="negative"><i class="fa fa-arrow-down"></i></span>' !!}</span>
</h3>