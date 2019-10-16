//ticketmaster API info
var ticketMasterApiKey = "Q0Mb6PeaHgQwJvNGEgAG3EvgZNbvV8PP"
var ticketMasterqueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?"


//click function
$(".btn-submit").on("click", function(event){
    event.preventDefault();
	console.log("trial.js click");
	
    console.log(artist);
   
});

//click function for events button
$(document).on("click", "#eventsBtn", function(event){
    console.log("trial clicked");
    $("#displayArea").empty();

    getArtistEventInfo(artist);
});



function getArtistEventInfo(artist){
    console.log(artist);
   var artistEventQueryURL = `${ticketMasterqueryURL}keyword=${artist}&apikey=${ticketMasterApiKey}`;

   $.ajax({
        url: artistEventQueryURL,
        method: "GET",
        async:true,
        dataType: "json"
   }).then(function(response){
        console.log(response);
        var listEvents = `<div class="card flex-fill m-5 cbod lettering">
            <h5 class="card-header text-center fontWhite">Events:</h5>
            <div class="card-body">
            <div class="card-columns" id="searchEvents"></div>
        </div>
    </div>`;

    $("#displayArea").html(listEvents);

    for(i = 0; i < 9; i++){
        var eachEventCard = `<div class="col-sm">
            <div class="card m-3">
                <h5 class="card-header text-center">${i + 1}</h5>
                <div class="card-body">
                    <h5 class="card-title text-center">"${response._embedded.events[i].name}"</h5>
                    <p class="card-text text-center">Date: "${response._embedded.events[i].dates.start.localDate}"</p>
                    <a href="${response._embedded.events[i].url}">Learn more</a>
                </div>
            </div>
        </div>`;

        $("#searchEvents").append(eachEventCard);
        
        };
    });
};
