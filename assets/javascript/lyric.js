// Lyric API
	var queryURL = "https://api.musixmatch.com/ws/1.1/";
	var apiKey = "13cdf1d052803672f7fd64d4de39086c";

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
