$(document).ready(function() {
	var username='javiburon'; // set user name
	var format='json';
	var url='http://api.twitter.com/1/statuses/user_timeline/'+username+'.'+format+'?callback=?'; // make the url
	$.getJSON(url,function(tweet){ // get the tweets
		$("#ultimo_tweet").html(tweet[0].text); // get the first tweet in the response and place it inside the div
	});
});
/*
$(function() {
	var $container = $('#cuerpo');
	$('#cuerpo a').click(function() {
		$('#loader_background').fadeIn();
		var url = $(this).attr('href');
		$.get(url, function (data) {
			$("#loader_background").fadeOut(function() {
				// without this the DOM will contain multiple elements
				// with the same ID, which is bad.
				$(this).remove();
				//$container.load('url #cuerpo');
				$container.hide().html(data).fadeIn();
			});
		});
		return false;
	});
});
*/
