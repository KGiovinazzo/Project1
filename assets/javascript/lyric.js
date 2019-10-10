// Lyric API
function gifSearch() 
{
	var lyric = $(this).attr("data-movie");
	var queryURL = ""
// Api key - 13cdf1d052803672f7fd64d4de39086c

// Ajax
	$.ajax(
			
{
	url: queryURL,
	method: "GET"
}).done(function (response) 

{
	var results = response.data;
	$("#lyrics").empty();
    for (var i = 0; i < results.length; i++) 
        {
			var lyrics = $("<div>");
			var p = $("<p>").text("Rating: " + results[i].rating);
			var lyrics = $("<img>");
			lyrics .attr("src", results[i].original_still.url);
			lyrics .attr("data-still", results[i].original_still.url);
			lyrics .attr("data-state", "still");
			lyrics .append(lyrics );
			$("#lyrics").append(gifDiv);
		}

	});
};
