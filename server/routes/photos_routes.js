//api_key: "e1459225c0568c62f9ded2b23fb937c3",
                // secret: "0cdfa647c3e3e6f1"
// https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=e1459225c0568c62f9ded2b23fb937c3&text=London&format=json

// Dependencies
var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");
var request = require("request");

// Initialize Express
var app = express();

//
app.get("/photofinders/:id", function(req, res) {
  	
  	var url = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search';
    var api_key = "e1459225c0568c62f9ded2b23fb937c3";
    var searchLocation = req.params.id
    var queryURL = url + "&api_key=" + api_key + "&text=" + searchLocation +"&format=json";

 // "http://farm" + data.photos.photo[i].farm + ".static.flickr.com/" + data.photos.photo[i].server + "/"+data.photos.photo[i].id + "_"+data.photos.photo[i].secret + ".jpg"

    request(queryURL, function(error, response, body) {
    	// var photoInfo = body;
    	// var farm = body.
    	console.log("body", body);
    	res.send(body);
    });
});

module.exports = app