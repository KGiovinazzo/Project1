// Lyric API
var apiKey = "13cdf1d052803672f7fd64d4de39086c";
var queryURL = "https://api.musixmatch.com/ws/1.1/";
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
});

// Ajax call function
function lyricAjax(){

	$.ajax({
		url: queryURL,
		method: "GET",
		dataType: "jsonp"
	}).then(function(response){
	console.log(response);
	
	});
};