let cityArray = []; // there is no use for this array yet, took a different approach

//to create function that append city names to the side bar

$("#submitBtn").on("click", function () {
  event.preventDefault();
  const cityInput = $("#cityName").val(); //!!!! have to clean this up
  console.log(cityInput); // to test its grabbing the right input
  const a = $("<div>");
  a.addClass("cityEl");
  a.text(cityInput);
  $("#cityLists").append(a);
  cityArray.push(cityInput); 
  console.log(cityArray); //to check it's adding city value to the cityArray - still no real purpose in this array for the time
  getWeather2(cityInput);
});

//to write a function that gets info from openWeatherMap API
function getWeather() {
  const cityName = $(this).text();
  console.log(cityName);

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
}

function getWeather2(cityInput){
const queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityInput +
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
      $("#cityTempDisplay").text(response.main.temp);
      $("#cityTempDisplayCel").text()
    });
}

//function that save cities to localStorage
function saveCity() {}

//function to change degree into celcius 
function convertKtoC(kelvin){
 
}

// $('#cityLists').on('click', getWeather);
$(document).on("click", ".cityEl", getWeather); 
