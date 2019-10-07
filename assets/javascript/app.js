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