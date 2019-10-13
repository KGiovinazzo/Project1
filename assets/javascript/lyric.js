// Lyric API
//using happi.dev api
var apiKey = "b3c073EQe0nYLX6By9t27c43gCztx0VHHSAOkOXXyDlA7l4mbJ9vnkqC";
var queryURL = "https://api.happi.dev/v1/music";
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

	findTrack(songTitle);
});

//function to search track through musixmatch
function findTrack(songTitle){

	var findTrackQueryURL = `${queryURL}?q=${songTitle}&apikey=${apiKey}`;

	$.ajax({
		url: findTrackQueryURL,
		method: "GET",
	}).then(function(response){
	console.log(response);
	
	});
};