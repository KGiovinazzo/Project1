// Lyric API
var queryURL = "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=Q0Mb6PeaHgQwJvNGEgAG3EvgZNbvV8PP"
var apiKey = "1Q0Mb6PeaHgQwJvNGEgAG3EvgZNbvV8PP"


//click function
$(".btn-submit").on("click", function(event)
{
    event.preventDefault();
	console.log("click");
	
	var songTitle = $("#songTitle").val().trim();
	var artist = $("#artist").val().trim();
	var album = $("#album").val().trim();
	console.log(songTitle);
	console.log(artist);
	console.log(album);
})

// Ajax
$.ajax(	{
	url: queryURL,
	method: "GET",
    dataType: "jsonp"
});
