// Lyric API
var queryURL = "http://api.musixmatch.com/ws/1.1/track.search?q_artist=justinbieber&page_size=3&page=1&s_track_rating=desc"
var apiKey = "13cdf1d052803672f7fd64d4de39086c"


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
	$.ajax(	
{
	url: queryURL,
	method: "GET",
	dataType: "jsonp"

}).then(function (response){
console.log(response);

function titleSearch()

	var titleSearch




})







	
