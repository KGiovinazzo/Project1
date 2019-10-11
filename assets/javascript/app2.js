var apiKey = "a9934be7d65f534ea8c336db02853748";
var queryURL = "https://ws.audioscrobbler.com/2.0/";

//make a click function for our form submit button
$(".btn-submit").on("click", function(event){
    event.preventDefault();
    console.log("click");

    var songTitle = $("#songTitle").val().trim();
    var artist = $("#artist").val().trim();
    var album = $("#album").val().trim();

    if (songTitle != "" && artist != ""){
        $("#songTitleDisplay, #artistDisplay, #albumDisplay").empty();
        $("#albumPic").attr("src", "http://lorempixel.com/200/200/technics");

        getTrackInfo(songTitle, artist);
        getSimilarArtist(artist);
    };
    
});

// queryURL = `${queryURL}?method=artist.getinfo&artist=${artist}&api_key=${apiKey}&format=json`;

//     getLfmData(artist);


//     if (album != '') {
//         queryURL = `https://ws.audioscrobbler.com/2.0/?method=album.getInfo&api_key=${apiKey}&artist=${artist}&album=${album}&format=json`;

//         getLfmData(album);
//     }
    
//         //queryURL = `https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=${artist}&track=${songTitle}&api_key=${apiKey}&format=json`;
//         //getLfmData(songTitle, album);
//     }

function getTrackInfo(songTitle, artist){

    trackQueryURL = `${queryURL}?method=track.getInfo&api_key=${apiKey}&artist=${artist}&track=${songTitle}&format=json`;

    $.ajax({
        url : trackQueryURL,
        method : "GET",
        dataType : "jsonp"
    }).then(function(response){
            console.log(response);
            // console.log(response.track.album.image[2]["#text"]);

            $("#songTitleDisplay").text(response.track.name);
            $("#artistDisplay").text(response.track.artist.name);
            $("#albumDisplay").text(response.track.album.title);
            $("#albumPic").attr("src", response.track.album.image[3]["#text"]);
            
    });
};

function getSimilarArtist(artist){

    artistQueryURL = `${queryURL}?method=artist.getsimilar&artist=${artist}&api_key=${apiKey}&format=json`;

    $.ajax({
        url : artistQueryURL,
        method : "GET",
        dataType : "jsonp"
    }).then(function(response){
        console.log(response);
        console.log(response.similarartists.artist[0]);

        $("#similarArtist1").text(response.similarartists.artist[0].name);
        $("#artist1Pic").attr("src", response.similarartists.artist[0].image[1]["#text"]);

        $("#similarArtist2").text(response.similarartists.artist[1].name);
        $("#artist2Pic").attr("src", response.similarartists.artist[1].image[1]["#text"]);

        $("#similarArtist3").text(response.similarartists.artist[2].name);
        $("#artist3Pic").attr("src", response.similarartists.artist[2].image[1]["#text"]);
    });

};


// if (key === "artist") {
            //     $("#albumPic").attr("src", response.artist.image[3]["#text"]);
            //     $("#albumPic").wrap($("<a>", {href: response.artist.url}));
            //     $("#artistDisplay").html(response.artist.name);
            // }
            // else if (key === "album") {
            //     $("#albumPic").attr("src", response.album.image[3]["#text"]);
            //     $("#albumPic").wrap($("<a>", {href: response.album.url}));
            //     $("#artistDisplay").html(response.album.artist);
            //     $("#albumDisplay").html(response.album.name);
            // }
            // else if (key === "song") {
            //     $("#albumPic").attr("src", response.track.album.image[3]["#text"]);
            //     $("#albumPic").wrap($("<a>", {href: response.track.artist.url}));
            //     $("#songTitleDisplay").html(response.track.name);
            //     $("#artistDisplay").html(response.track.artist.name);
            // }
            // else if (key === "similarArtists") {
            //     $("#artist1Pic").attr("src", response.similarartists.artist[0].image[2]["#text"]);
            //     $("#artist1Pic").wrap($("<a>", {href: response.similarartists.artist[0].url}));
            //     $("#similarArtist1").html(response.similarartists.artist[0].name);
            //     $("#artist2Pic").attr("src", response.similarartists.artist[1].image[2]["#text"]);
            //     $("#artist2Pic").wrap($("<a>", {href: response.similarartists.artist[1].url}));
            //     $("#similarArtist2").html(response.similarartists.artist[1].name);
            //     $("#artist3Pic").attr("src", response.similarartists.artist[2].image[2]["#text"]);
            //     $("#artist3Pic").wrap($("<a>", {href: response.similarartists.artist[3].url}));
            //     $("#similarArtist3").html(response.similarartists.artist[2].name);
            // }
            //$("#artist1Pic").attr("src", response.similartracks.track[0].image[2]["#text"]);
            //$("#artist1Pic").wrap($("<a>", {href: response.similartracks.track[0].url}));
            //$("#similarArtist1").html(response.similartracks.track[0].name);
            //$("#artist2Pic").attr("src", response.similartracks.track[1].image[2]["#text"]);
            //$("#artist2Pic").wrap($("<a>", {href: response.similartracks.track[1].url}));
            //$("#similarArtist2").html(response.similartracks.track[1].name);
            //$("#artist3Pic").attr("src", response.similartracks.track[2].image[2]["#text"]);
            //$("#artist3Pic").wrap($("<a>", {href: response.similartracks.track[3].url}));
            //$("#similarArtist3").html(response.similartracks.track[2].name);