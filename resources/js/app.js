require('./bootstrap');

var Market_Watch = {
	init:function(){
		this.event_handlers();
	},

	event_handlers:function(){
		$('.search').on('keyup', this.search);
	},

	search:function(e){
		e.preventDefault();
		var search_term = $(this).val();
		console.log(search_term);
		
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
					results+= '<a class="list-group-item list-group-item-action" href="/company/'+response[i].symbol+'"><span class="company_name">'+response[i].symbol + response[i].securityName+'</span>' + '-' +(response[i].exchange)+'</a>';
				}

				$('.results').append(results).show();				
			}
		})
	}
}

$(document).ready(function(){
	Market_Watch.init();
});