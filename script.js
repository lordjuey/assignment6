//to create function that append city names to the side bar

$("#submitBtn").on("click", function () {
  event.preventDefault();
  const city = $("#cityName").val(); //!!!! have to clean this up
  console.log(city); // to test its grabbing the right input
  const a = $("<div>");
  a.addClass("cityEl");
  a.text(city);
  $(".cityLists").append(a);
});

//to write a function that gets info from openWeatherMap API

$(".cityLists").on("click", function (event) {
  event.preventDefault();

  cityName = $("#cityName").val();
  const queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=166a433c57516f51dfab1f7edaed8413";
  // AJAX call to the OpenWeatherMap API

  $.ajax({
    url: queryURL,
    method: "GET",
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {
      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);
    });
});
