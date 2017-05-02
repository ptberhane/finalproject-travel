// Dependencies
var express = require("express");
var path = require("path");
var request = require("request");

// Initialize Express
var app = express();

//
app.get("/info/:city", function(req, res) {
  	
  	var url = 'https://www.numbeo.com/api/city_climate?api_key=';
    var api_key = "rqdu9bx9kc3deb";
    var searchLocation = req.params.city
    var queryURL = url + api_key + "&query=" + searchLocation;

 

    request(queryURL, function(error, response, body) {
    	console.log("body", body);
    	res.send(body);
    });
});

module.exports = app;
