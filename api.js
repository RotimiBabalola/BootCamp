//Here I access the OpenWeatherMap API using the 'request' HTTP client in nodejs
//Weather data for a given city is returned in JSON format

var request = require('request');

var city = "Seoul" //you can change this value
var units = "metric"; //units the measurements should be in metric or imperial


if(units != "metric" | "imperial"){
  console.log("Please enter metric or imperial as units")
}

var api = "http://api.openweathermap.org/data/2.5/weather?q="
var apiKey = "&appid=9ee94612d30c8f5b8d4c58c609f36549"

var url = api + city + apiKey + "&units="+units


request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //JSON.parse parses the JSON data and ensure it's printed in a nice way
    var json = JSON.parse(body)
    console.log("JSON data for " + city)
    console.log("\n")
    console.log(json)
  }
})

