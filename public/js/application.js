$(document).ready(function(){
	$("#get_color").on('click', function(e) {
		e.preventDefault;

		request = $.ajax({
		  type: "POST",
		  url: '/color'
		});

		var allBoxes = $('#color_me li')

		request.done(function(response){
			var ans = $.parseJSON(response)
			$("ul li:nth-child("+ans.cell+")").css("background-color", ans.color)
		});
	});
});