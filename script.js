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
  const cityInput = $(this).text();
  console.log(cityInput);

  const queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityInput +
    "&appid=166a433c57516f51dfab1f7edaed8413";

  // AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // Log the queryURL
    console.log(queryURL);
    console.log(response);
    $("#cityNameDisplay").text(response.name); //get the name of city on screen
    $("#cityTempDisplay").text(response.main.temp);
    $("#cityTempDisplayCel").text(convertKtoC(response.main.temp).toFixed(2));
    $("#cityHumidDisplay").text(response.main.humidity);
    $("#cityWindDisplay").text(response.wind.speed);
    getFiveDays(cityInput);
  });
}

function getWeather2(cityInput) {
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
      $("#cityTempDisplayCel").text(convertKtoC(response.main.temp).toFixed(2));
      $("#cityHumidDisplay").text(response.main.humidity);
      $("#cityWindDisplay").text(response.wind.speed);
      // response.weather[0].icon;
      getFiveDays(cityInput);
    });
}

//function for 5 days forcast
function getFiveDays(cityInput) {
  const queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityInput +
    "&appid=166a433c57516f51dfab1f7edaed8413";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // Log the queryURL
    console.log(queryURL);
    console.log(response);
    $("#date1").text(response.list[8].dt_txt);
    //icon
    $("#temp1").text(convertKtoC(response.list[8].main.temp).toFixed(2));
    $("#humid1").text(response.list[8].main.humidity);

    $("#date2").text(response.list[16].dt_txt);
    //icon
    $("#temp2").text(convertKtoC(response.list[16].main.temp).toFixed(2));
    $("#humid2").text(response.list[16].main.humidity);

    $("#date3").text(response.list[24].dt_txt);
    //icon
    $("#temp3").text(convertKtoC(response.list[24].main.temp).toFixed(2));
    $("#humid3").text(response.list[24].main.humidity);

    $("#date4").text(response.list[32].dt_txt);
    //icon
    $("#temp4").text(convertKtoC(response.list[32].main.temp).toFixed(2));
    $("#humid4").text(response.list[32].main.humidity);

    $("#date5").text(response.list[39].dt_txt);
    //icon
    $("#temp5").text(convertKtoC(response.list[39].main.temp).toFixed(2));
    $("#humid5").text(response.list[39].main.humidity);
  });
}

//function that save cities to localStorage
function saveCity() {}

//function to change degree into celcius
function convertKtoC(kelvin) {
  if (kelvin < 0) {
    return "below absolute zero";
  } else {
    return kelvin - 273.15;
  }
}

// $('#cityLists').on('click', getWeather);
$(document).on("click", ".cityEl", getWeather);
