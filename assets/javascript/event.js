// News API
var newsQueryURL = "https://newsapi.org/v2/everything?"
var newsApiKey = "6203d5d89e5d45e7896935c6530722d5"


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
	findNews(artist);

})
 
// Ajax
function findNews(artist){

	var findNewsQueryUrl = `${newsQueryURL}q=${artist}&apikey=${newsApiKey}`;

	$.ajax(	{
	url: findNewsQueryUrl,
	method: "GET",
	dataType: "json"
	
	
}).then(function (response){
console.log(response);
});
}
