
let cityArray = [];

//to create function that append city names to the side bar

$("#submitBtn").on("click", function () {
  event.preventDefault();
  const cityInput = $("#cityName").val(); //!!!! have to clean this up
  console.log(cityInput); // to test its grabbing the right input
  const a = $("<div>");
  a.addClass("cityEl");
  a.text(cityInput);
  $(".cityLists").append(a);
  cityArray.push(cityInput);
  console.log(cityArray); //to check it's adding city value to the cityArray
});

//function that save cities to localStorage
function saveCity(){
    console.log();
}

saveCity();

//to write a function that gets info from openWeatherMap API

$(".cityLists").on("click", function (event) {
  event.preventDefault();
  cityName = $("#cityLists").text();
  console.log(cityName);
  //change the cityInput from the Array I created from the previous function//
  
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
      console.log(response);
    $("#cityNameDisplay").text(response.name); //get the name of city on screen
      // Log the resulting object
      
    });
});
