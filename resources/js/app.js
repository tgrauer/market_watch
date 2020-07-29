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
			}
		})
	}
}

$(document).ready(function(){
	Market_Watch.init();
});