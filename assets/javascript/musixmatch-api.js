// Lyric API
//musixmatch.dev api
var musixMatchApiKey = "13cdf1d052803672f7fd64d4de39086c";
var musixMatchQueryURL = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/";
var songTitle;
var artist;
var album;
	
//click function
$(".btn-submit").on("click", function(event){
    event.preventDefault();
	console.log("click");
	
	songTitle = $("#songTitle").val().trim();
	artist = $("#artist").val().trim();
	album = $("#album").val().trim();
	console.log(songTitle);
	console.log(artist);
	console.log(album);

	findArtist(artist);
});

//function to search track through musixmatch
function findArtist(artist){

	var findArtistQueryURL = `${musixMatchQueryURL}artist.search?q_artist=${artist}&apikey=${musixMatchApiKey}`;

	$.ajax({
		url: findArtistQueryURL,
		method: "GET",
	}).then(function(response){
	console.log(response);
	
	});
};

// var apiKey = "13cdf1d052803672f7fd64d4de39086c";
// var queryURL = "https://api.musixmatch.com/ws/1.1/"