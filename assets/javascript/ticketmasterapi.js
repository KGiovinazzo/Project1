$.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=Q0Mb6PeaHgQwJvNGEgAG3EvgZNbvV8PP",
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});