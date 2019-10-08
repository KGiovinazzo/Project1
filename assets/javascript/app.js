//make a click function for our form submit button
$(".btn-submit").on("click", function(event){
    event.preventDefault();
    console.log("click");

    var songTitle = $("#songTitle").val().trim();
    var artist = $("#artist").val().trim();
    var album = $("#album").val().trim();

    console.log(`Song title: ${songTitle}
        Artist: ${artist}
        Album: ${album}`);
})

// Spotify API
var client = Client.instance;

client.settings = {
    clientId: 'b4aa2fec4925426d960ed2b2b54096bb',
    secretId: '7c23e6ddc38c4592841c6df2f0418dd7',
};


// Ajax Call
	$.ajax(		
{
	url: queryURL,
	method: "GET"
}).done(function (response)





