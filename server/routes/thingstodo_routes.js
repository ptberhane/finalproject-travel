// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var request = require("request");

// Initialize Express
var app = express();

// Create route for the thingstodo
app.get("/Todo/:city", function(req, res) {
    
    //"https://api.tripexpert.com/v1/venues?destination_id=6&amenity_ids[]=31&amenity_ids[]=32"
    var url = 'https://api.tripexpert.com/v1/venues';
    var api_key = "8bed1c3e068b84f0388ec817dd255fd4";
    var searchLocation = req.params.city;
    var queryURL = url + "&api_key=" + api_key + "&text=" + searchLocation + "&format=json";

     // Create variables for the url


     //Request function response
      request(queryURL, function(error, response, body) {
     
      //console.log(response.body);
     
    

      //console.log(responseString);

      body = JSON.parse(correctString);
      //console.log(body);
    });
      
});


module.exports = app