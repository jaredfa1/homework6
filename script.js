var city;
var lat;
var lon;
var url;
var cities[];
$("#searchBtn").on("click", function(event){
  event.preventDefault();
  if (city == "") {
    return;
  } else {
    $('#today .cardbody').empty();
    $("#cityIn").val = "";
    city = $("#cityIn").val();
    url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=1952307f51d67572d9be7e30a99e8196";
    apiCall();

    localStorage.setItem("city", JSON.stringify(city));
    var newInput = $('<li>').text.(JSON.parse(localStorage.getItem("city")));
    $("#pastSearch").append(newCity);
  }
})

function apiCall(){
  #ajax({
    url:"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=1952307f51d67572d9be7e30a99e8196"
    method: "GET"
  })
  .then(function(res){
    var weather = {
      city: res.name,
      lon: res.coord.lon
      lat: res.coord.lat
      temperature:res.main.temp
      humidity: res.main.humidity,
      windSpeed: res.wind.speed,
    };
    var h3 = $('<h3>').addClass('card-title').text(city);
    var temp = $('<p>').addClass('card-body').text("Temperature: "+res.main.temp + "F");
    var humidity = $('<p>').addClass('card-body').text("Humidity "+res.main.humidity + "%");
    var windSpeed = $('<p>').addClass('card-body').text("Wind Speed "res.main.speed + "MPH");

    $('#today .card-body').append(h3, temp, humidity, wind);

  })
}

//5day forcast
$.ajax({
  url: "api.openweathermap.org/data/2.5/forecast?lat=" + lat = "&lon=" + lon + "&appid=1952307f51d67572d9be7e30a99e8196",
  method: "GET"
})

.then(function(5day){
  for(var i = 0; i<5; i++){
    var temp =((5day.list[i].main.temp));
    var humidity = 5day.list[i].main.humidity;
    var windSpeed = 5day.list[i].main.speed;
    var for1 = $("<p>").text("Temperature: " + temp +"F");
    var for2 = $("<p>").text("Humidity: " + Humidity +"%");
    var for3 = $("<p>").text("Wind Speed " + windSpeed + "MPH");

    $('#5day .card-body2').append(for1, for2, for2);
  }
})