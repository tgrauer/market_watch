require('./bootstrap');

var Market_Watch = {
	init(){
		this.event_handlers();

		$('.range_bar').each(function(){
			Market_Watch.range_bar(this);
		});

		$('body').on('click', this.hide_searchresults);
	},

	event_handlers(){
		$('.search').on('keyup', this.search);
	},

	search(e){
		e.preventDefault();
		var search_term = $(this).val();
		
		$('.results_cnt').empty();

		$.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });

        var token = $('meta[name="csrf-token"]').attr('content');

		$.ajax({
			url:'/search/'+search_term,
			type:'POST',
			dataType:'json',
			data:{
				_token:token,
				search_term:search_term
			},
			success:function(response){
				console.log(response);

				var results ='';
				for(var i=0;i<response.length;i++){
					results+= '<a class="list-group-item list-group-item-action" href="/company/'+response[i].symbol+'"><span class="company_name">'+response[i].symbol +' | ' + response[i].securityName+'</span>' + ' (' +response[i].exchange+')</a>';
				}

				$('.search_results').append(results).show();				
			}
		})
	},

	hide_searchresults(){
		$('.search_results').empty().hide();
	},

	range_bar(that){
		var low = $(that).find('.low small').text();
		var high = $(that).find('.high small').text();
		var current = $(that).find('.progress-bar').data('current');
		low = low.substr(1);
		low = low.replace(/,/g, '');
		high = high.substr(1);
		high = high.replace(/,/g, '');
		var x = high - current;
		var range = high - low;
		x = x / range * 100;
		var width = Math.round(98 - x) ;
		$(that).find('.progress-bar').css({'width': width+ '%'}).attr('aria-valuenow', width);
	}
}

$(document).ready(function(){
	Market_Watch.init();
	$("#menu-toggle").click(function(e) {
	    e.preventDefault();
	    $(".wrapper").toggleClass("toggled");
	});

	$(function () {
		$('[data-toggle="tooltip"]').on('click', function(e){
			e.preventDefault();
		});

		$('[data-toggle="tooltip"]').tooltip({
			delay:250,
		});
	});
});