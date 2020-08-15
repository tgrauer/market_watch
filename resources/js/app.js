require('./bootstrap');

var Market_Watch = {
	init:function(){
		this.event_handlers();
		this.range_bar();
	},

	event_handlers:function(){
		$('.search').on('keyup', this.search);
	},

	search:function(e){
		e.preventDefault();
		var search_term = $(this).val();
		
		$('.results').empty();

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

				$('.results').append(results).show();				
			}
		})
	},

	range_bar(){
		var low = $('.range_bar .low').text();
		var high = $('.range_bar .high').text();
		var current = $('.progress-bar').data('current');
		low = low.substr(1);
		low = low.replace(/,/g, '');
		high = high.substr(1);
		high = high.replace(/,/g, '');
		var x = high - current;
		var range = high - low;
		x = x / range * 100;
		var ml = 98 - x ;

		// $('.marker').css({'margin-left': ml+'%'});
		$('.progress-bar').css({'width': ml+ '%'}).attr('aria-valuenow', ml);
	}
}

$(document).ready(function(){
	Market_Watch.init();
	$("#menu-toggle").click(function(e) {
	      e.preventDefault();
	      $(".wrapper").toggleClass("toggled");
	    });
});