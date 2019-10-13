//Lyric API
//using happy.dev API
var happyDevApiKey = "b3c073EQe0nYLX6By9t27c43gCztx0VHHSAOkOXXyDlA7l4mbJ9vnkqC";
var happiDevQueryURL = "https://api.happi.dev/v1/music";
var songTitle;	
var artist;	
var album;	

//click function for submit btn
$(".btn-submit").on("click", function(event){
	console.log(songTitle);
	console.log(artist);
	console.log(album);

	findTrack(songTitle);
});


//function to search track through happy.dev
function findTrack(songTitle){

	var findTrackQueryURL = `${happiDevQueryURL}?q=${songTitle}&apikey=${happyDevApiKey}`;

	$.ajax({
		url: findTrackQueryURL,
		method: "GET",				
	}).then(function(response){
    console.log(response);	

    });
};	