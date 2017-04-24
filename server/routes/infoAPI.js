var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");
var request = require("request");

// Initialize Express
var app = express();

//
app.get("/info/:id", function(req, res) {
  	
  	var url = 'https://www.numbeo.com/api/city_climate?api_key=';
    var api_key = "rqdu9bx9kc3deb";
    var searchLocation = req.params.id
    var queryURL = url + api_key + "&query=" + searchLocation;

 // "http://farm" + data.photos.photo[i].farm + ".static.flickr.com/" + data.photos.photo[i].server + "/"+data.photos.photo[i].id + "_"+data.photos.photo[i].secret + ".jpg"

    request(queryURL, function(error, response, body) {
    	// var photoInfo = body;
    	// var farm = body.
    	console.log("body", body);
    	res.send(body);
    });
});

module.exports = app;
