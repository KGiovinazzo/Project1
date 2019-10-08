/**
 * Setting up our globals, spotify, etc 
 * 
 */

requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'jquery-3.4.1'
    }
});

var Spotify, s, spotifyApi;
//authorizeSpotify();
function authorizeSpotify(){
    $.ajax({
        url: "https://accounts.spotify.com/authorize",
        method: "GET",
        params:{
            "client_id":"b4aa2fec4925426d960ed2b2b54096bb",
            "response_type":"code",
            "redirect_uri":"localhost"  
        }
    },function(result, error){
        console.log(result);
        console.log(error);

    })
}
function requestToken(){
    $.ajax(
        {
          method: "POST",
          url: "https://accounts.spotify.com/api/token",
          data: {
            "grant_type":    "authorization_code",
            "code":          code,
            "redirect_uri":  "localhost",
            "client_secret": "b4aa2fec4925426d960ed2b2b54096bb",
            "client_id":     "7c23e6ddc38c4592841c6df2f0418dd7",
          },
          success: function(result) {
                configureSpotify(result)
          },
        }
      );
}

configureSpotify();
function configureSpotify(token){
    require(['spotify-web-api-js'], function (Spotify) {
        // foo is now loaded.
        spotifyApi = new SpotifyWebApi();
        console.log(spotifyApi);
        //token goes here
        spotifyApi.setAccessToken("BQBcYS-E2-ce6qSORz3v-a9Vh3JRwQb73aCHTsZIQDnU64gprfI_zUS-lyli9YSeMEVaVpuPIU0WGjugmpji_ip7ox3JMvzGkDySN4Dpt3O352Xs7wVjKPXqxB91SlmXQRXDIOw5pIkSZOLV8ZFCWicipOOHnixx9IuIaRtNQQ03UO7B6WXswUaAVYfda0Ay0AATLMFusJA0iXaj41YSf5FMtMOJija8OF13OQJD33yaz9ILeo8AXHe2PLZVhtOqH1b6kTPJvh6-");
        // spotifyApi.setPromiseImplementation(Q);
        // get Elvis' albums, passing a callback. When a callback is passed, no Promise is returned
        spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
            if (err) console.error(err);
            else console.log('Artist albums', data);
        });
        // get Elvis' albums, using Promises through Promise, Q or when
        spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
        .then(function(data) {
            console.log('Artist albums', data);
        }, function(err) {
            console.error(err);
        });
    });
}


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

//SPOTIFY API KEY - 7c23e6ddc38c4592841c6df2f0418dd7

// function ajaxCall(value){
//     //variables

//     $.ajax({
//         url: ,
//         method: "GET"
//     }).then(function())
// }

