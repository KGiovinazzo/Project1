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
});

var apiKey = "a9934be7d65f534ea8c336db02853748";
var queryURL = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&artist=cher&track=believe&format=json`;


$.ajax({
    url : queryURL,
    method: 'POST',
    dataType: 'jsonp'
}).then(function(response){
    console.log(response);
});

// $.ajax({
//     type : 'POST',
//     url : 'http://ws.audioscrobbler.com/2.0/',
//     data : 'method=artist.getinfo&' +
//            'artist=After+The+Burial&' +
//            'api_key=' + apiKey +
//            'format=json',
//     dataType : 'jsonp',
//     success : function(data) {
//         // Handle success code here
//         console.log(data);
//     },
//     error : function(code, message){
//         // Handle error here
//         console.log("error");
//     }
// });

   