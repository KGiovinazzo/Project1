var apiKey = "a9934be7d65f534ea8c336db02853748";
var queryURL;

//make a click function for our form submit button
$(".btn-submit").on("click", function(event){
    event.preventDefault();
    console.log("click");

    var songTitle = $("#songTitle").val().trim();
    var artist = $("#artist").val().trim();
    var album = $("#album").val().trim();

    queryURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${apiKey}&format=json`;
    getLfmData("artist");
    queryURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artist}&api_key=${apiKey}&format=json`;
    getLfmData("similarArtists");

    if (album != '') {
        queryURL = `https://ws.audioscrobbler.com/2.0/?method=album.getInfo&api_key=${apiKey}&artist=${artist}&album=${album}&format=json`;
        getLfmData("album");
    }
    if (songTitle != '') {
        queryURL = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&artist=${artist}&track=${songTitle}&format=json`;
        getLfmData("song");
        //queryURL = `https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=${artist}&track=${songTitle}&api_key=${apiKey}&format=json`;
        //getLfmData(songTitle, album);
    }
});

function getLfmData(key) {
    $.ajax({
        url : queryURL,
        method: 'POST',
        dataType: 'jsonp'
        }).then(function(response){
            console.log(response);
            
            if (key === "artist") {
                $("#albumPic").attr("src", response.artist.image[3]["#text"]);
                $("#albumPic").wrap($("<a>", {href: response.artist.url}));
                $("#artistDisplay").html(response.artist.name);
            }
            else if (key === "album") {
                $("#albumPic").attr("src", response.album.image[3]["#text"]);
                $("#albumPic").wrap($("<a>", {href: response.album.url}));
                $("#artistDisplay").html(response.album.artist);
                $("#albumDisplay").html(response.album.name);
            }
            else if (key === "song") {
                $("#albumPic").attr("src", response.track.album.image[3]["#text"]);
                $("#albumPic").wrap($("<a>", {href: response.track.artist.url}));
                $("#songTitleDisplay").html(response.track.name);
                $("#artistDisplay").html(response.track.artist.name);
            }
            else if (key === "similarArtists") {
                $("#artist1Pic").attr("src", response.similarartists.artist[0].image[2]["#text"]);
                $("#artist1Pic").wrap($("<a>", {href: response.similarartists.artist[0].url}));
                $("#similarArtist1").html(response.similarartists.artist[0].name);
                $("#artist2Pic").attr("src", response.similarartists.artist[1].image[2]["#text"]);
                $("#artist2Pic").wrap($("<a>", {href: response.similarartists.artist[1].url}));
                $("#similarArtist2").html(response.similarartists.artist[1].name);
                $("#artist3Pic").attr("src", response.similarartists.artist[2].image[2]["#text"]);
                $("#artist3Pic").wrap($("<a>", {href: response.similarartists.artist[3].url}));
                $("#similarArtist3").html(response.similarartists.artist[2].name);
            }
            //$("#artist1Pic").attr("src", response.similartracks.track[0].image[2]["#text"]);
            //$("#artist1Pic").wrap($("<a>", {href: response.similartracks.track[0].url}));
            //$("#similarArtist1").html(response.similartracks.track[0].name);
            //$("#artist2Pic").attr("src", response.similartracks.track[1].image[2]["#text"]);
            //$("#artist2Pic").wrap($("<a>", {href: response.similartracks.track[1].url}));
            //$("#similarArtist2").html(response.similartracks.track[1].name);
            //$("#artist3Pic").attr("src", response.similartracks.track[2].image[2]["#text"]);
            //$("#artist3Pic").wrap($("<a>", {href: response.similartracks.track[3].url}));
            //$("#similarArtist3").html(response.similartracks.track[2].name);
    });
}

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