$(document).ready(function() {
	var username='javiburon'; // set user name
	var format='json';
	var url='http://api.twitter.com/1/statuses/user_timeline/'+username+'.'+format+'?callback=?'; // make the url
	$.getJSON(url,function(tweet){ // get the tweets
		$("#ultimo_tweet").html(tweet[0].text); // get the first tweet in the response and place it inside the div
	});
});
