//last.FM API info
var apiKey = "a9934be7d65f534ea8c336db02853748";
var queryURL = "https://ws.audioscrobbler.com/2.0/";
var songTitle;
var artist;
var album;

//make a click function for our form submit button
$(".btn-submit").on("click", function(event){
    event.preventDefault();
    console.log("click");
    //variable to store input values
    songTitle = $("#songTitle").val().trim();
    artist = $("#artist").val().trim();
    album = $("#album").val().trim();

    if(songTitle != "" && artist != ""){
        //function to call the track
        getTrackInfo(songTitle, artist);
    } else if(artist != "" && album != ""){
        //function to pull up album info
        getAlbumInfo(artist, album);
    } else if(artist != ""){
        //function to generate buttons for artist only input
        artistInputButtons();
    };

});
//click event for artist info button
$(document).on("click", "#artistInfoBtn", function(event){
    console.log("clicked");
    $("#displayArea").empty();

    getArtistInfo(artist);
});
//click event for similar artists button
$(document).on("click", "#similarArtistBtn", function(event){

    $("#displayArea").empty();
    $("#displayArea").html(`<div class="row d-flex justify-content-around" id="displaySimilarArtist"></div>`);

    getSimilarArtist(artist);
});
//click event for artist top albums
$(document).on("click", "#topAlbumsBtn", function(event){

    $("#displayArea").empty();

    getTopAlbums(artist);
});
//click event for artist top tracks
$(document).on("click", "#topTracksBtn", function(event){
    console.log(artist);

    $("#displayArea").empty();

    getTopTracks(artist);
});

//function to generate button when only artist is input
function artistInputButtons(){
    var artistButtonSet = `<button type="button" class="btn btn-primary" id="artistInfoBtn">Artist Info</button>
    <button type="button" class="btn btn-primary" id="similarArtistBtn">Similar Artists</button>
    <button type="button" class="btn btn-primary" id="topAlbumsBtn">Top Albums</button>
    <button type="button" class="btn btn-primary"
    id="topTracksBtn">Top Tracks</button>`;

    $("#buttonRow").html(artistButtonSet);
}

//Last.FM API call put into functions
//function to pull up track info
function getTrackInfo(songTitle, artist) {

    var trackQueryURL = `${queryURL}?method=track.getInfo&api_key=${apiKey}&artist=${artist}&track=${songTitle}&format=json`;

    $.ajax({
        url: trackQueryURL,
        method: "GET",
        dataType: "jsonp"
    }).then(function(response){
        console.log(response);

        var displayTrack = `<div id = "display" class="card m-3 col flex-md-fill">
                <div class="row no-gutters">
                    <div class="col">
                        <img src="${response.track.album.image[3]["#text"]}" class="card-img my-3">
                    </div>
                    <div class="col align-self-center">
                        <div class="card-body ml-3" id="cardCol">
                            <h5 class="card-title text-center m-3">${response.track.name}</h5>
                            <p class="card-text text-center">${response.track.artist.name}</p>
                            <p class="card-text text-center">${response.track.album.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        $("#displayArea").html(displayTrack);

    });

};
//function to get artist info
function getArtistInfo(artist){

    var artistQueryURL = `${queryURL}?method=artist.getinfo&artist=${artist}&api_key=${apiKey}&format=json`;

    $.ajax({
        url: artistQueryURL,
        method: "GET",
        dataType: "jsonp"
    }).then(function(response){
        console.log(response);
        
        var artistDisplay = `<div class="card m-5">
            <div class="card-header text-center">Summary</div>
            <div class="card-body">
                <h5 class="card-title text-center m-3">${response.artist.name}</h5>
                <p class="card-text m-5">${response.artist.bio.summary}</p>
            </div>
        </div>`;

        $("#displayArea").html(artistDisplay);

    });

};
//function to get similar artist info
function getSimilarArtist(artist){

    var similarArtistQueryURL = `${queryURL}?method=artist.getsimilar&artist=${artist}&api_key=${apiKey}&format=json`;

    $.ajax({
        url: similarArtistQueryURL,
        method: "GET",
        dataType: "jsonp"
    }).then(function(response){
        console.log(response);

        for(i = 0; i < 6; i++){
            var similarArtistCard = `<div class="col-sm">
                <div class="card m-3">
                    <h5 class="card-header text-center">${i + 1}</h5>
                    <div class="card-body">
                        <h5 class="card-title text-center">${response.similarartists.artist[i].name}</h5>
                        <p class="card-text"></p>
                    </div>
                </div>
            </div>`;
        
        $("#displaySimilarArtist").append(similarArtistCard);
        
        };

    });

};
//function to grab top albums
function getTopAlbums(artist){
    var topAlbumQueryURL = `${queryURL}?method=artist.gettopalbums&artist=${artist}&api_key=${apiKey}&format=json`;

    $.ajax({
        url: topAlbumQueryURL,
        method: "GET",
        dataType: "jsonp"
    }).then(function(response){
        console.log(response);
        console.log(response.topalbums["@attr"].artist);
        
        var topAlbumCard = `<div class="card flex-fill">
            <h5 class="card-header text-center">${response.topalbums["@attr"].artist}</h5>
            <div class="card-body">
            <div class="row" id="topAlbums"></div>
            </div>
        </div>`;

        $("#displayArea").html(topAlbumCard);

        for(i = 0; i < 6; i++){
            var eachAlbumCard = `<div class="col-sm">
                <div class="card m-3">
                    <h5 class="card-header text-center">${i + 1}</h5>
                    <div class="card-body">
                        <h5 class="card-title text-center">${response.topalbums.album[i].name}</h5>
                        <a href="${response.topalbums.album[i].url}">Learn more</a>
                    </div>
                </div>
            </div>`;

            $("#topAlbums").append(eachAlbumCard);
        };

    });

};

//function get top tracks
function getTopTracks(artist){

    var topTrackQueryURL = `${queryURL}?method=artist.gettoptracks&artist=${artist}&api_key=${apiKey}&format=json`;

    $.ajax({
        url: topTrackQueryURL,
        method: "GET",
        dataType: "jsonp"
    }).then(function(response){
        console.log(response);

        var topTrackCard = `<div class="card flex-fill">
            <h5 class="card-header text-center">${response.toptracks["@attr"].artist}</h5>
            <div class="card-body">
            <div class="row" id="topTracks"></div>
            </div>
        </div>`;

        $("#displayArea").html(topTrackCard);

        for(i = 0; i < 6; i++){
            var eachTrackCard = `<div class="col-sm">
                <div class="card m-3">
                    <h5 class="card-header text-center">${i + 1}</h5>
                    <div class="card-body">
                        <h5 class="card-title text-center">${response.toptracks.track[i].name}</h5>
                        <a href="${response.toptracks.track[i].url}">Learn more</a>
                    </div>
                </div>
            </div>`;

            $("#topTracks").append(eachTrackCard);
        };

    });

};














function getAlbumInfo(artist, album){
    
    var albumQueryURL = `${queryURL}?method=album.getInfo&api_key=${apiKey}&artist=${artist}&album=${album}&format=json`;

    $.ajax({
        url: albumQueryURL,
        method: "GET",
        dataType: "jsonp"
    }).then(function(response){
        console.log(response);

    });

};



function getSimilarTrack(songTitle, artist){

    var similarTrackQueryURL = `${queryURL}?method=track.getsimilar&artist=${artist}&track=${songTitle}&api_key=${apiKey}&format=json`;

    $.ajax({
        url: similarTrackQueryURL,
        method: "GET",
        dataType: "jsonp"
    }).then(function(response){
        console.log(response);

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