// Lyric API
var apiKey = "13cdf1d052803672f7fd64d4de39086c";
var queryURL = "https://api.musixmatch.com/ws/1.1/";
	

// Ajax call function
function lyricAjax(){

	$.ajax({
		url: queryURL,
		method: "GET",
		dataType: "jsonp"
	}).then(function(response){
	console.log(response);
	
	var queryURL = "http://api.musixmatch.com/ws/1.1/track.search?q_artist=justinbieber&page_size=3&page=1&s_track_rating=desc";

};

//click function
$(".btn-submit").on("click", function(event){
    event.preventDefault();
	console.log("click");
	
	var songTitle = $("#songTitle").val().trim();
	var artist = $("#artist").val().trim();
	var album = $("#album").val().trim();
	console.log(songTitle);
	console.log(artist);
	console.log(album);
});
 
// Ajax
function trackLyrics(songTitle, artist){
	trackLyrcisQueryURL = "track.lyrics.get?track_id=15953433" + "album.tracks.get?album_id=13750844&page=1&page_size=2"

	$.ajax({
	url: queryURL,
	method: "GET",
	dataType: "jsonp"
}).then(function (response){
console.log(response);
});
};
