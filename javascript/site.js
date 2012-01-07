$(document).ready(function() {
	check_position_and_layout();
	$(".cuerpo li").each(function(i) {
		var position = $(this).position();
	});
});

function check_position_and_layout(){
	var anchura = $(".cuerpo").width();
	console.log(anchura);
}