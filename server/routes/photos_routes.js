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

<<<<<<< HEAD
// Create route for the photofinder
=======
//
>>>>>>> 11748ce120d6efba9d4470de640a5061b6c8a43e
app.get("/photofinders/:id", function(req, res) {
  	
  	var url = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search';
    var api_key = "e1459225c0568c62f9ded2b23fb937c3";
    var searchLocation = req.params.id
    var queryURL = url + "&api_key=" + api_key + "&text=" + searchLocation +"&format=json";

<<<<<<< HEAD

   // Create variables for the url 
   var farmId;
   var serverId;
   var id;
   var secret;
   var photosUrl; 

    request(queryURL, function(error, response, body) {
    	console.log("HELLO");

//    	console.log(response.body);
//      console.log("second");

      var responseString = response.body;
      var correctString = responseString.slice(14,-1);


//      console.log(responseString);

      body = JSON.parse(correctString);
      //console.log(body);

      var arrayOfUrls = [];
     
    	for (var i =0; i<body.photos.photo.length; i++) {

           // Variables 	
  	     farmId = body.photos.photo[i].farm;
  		   serverId = body.photos.photo[i].server;
  		   id = body.photos.photo[i].id;
  		   secret = body.photos.photo[i].secret;
	       
	       //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
	       photosUrl = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
	 			
	 			//console.log the photosUrl
	 			console.log("photosUrl", photosUrl);

        arrayOfUrls.push(photosUrl);
	       
    	}

    	res.send(arrayOfUrls);
=======
 // "http://farm" + data.photos.photo[i].farm + ".static.flickr.com/" + data.photos.photo[i].server + "/"+data.photos.photo[i].id + "_"+data.photos.photo[i].secret + ".jpg"

    request(queryURL, function(error, response, body) {
    	// var photoInfo = body;
    	// var farm = body.
    	console.log("body", body);
    	res.send(body);
>>>>>>> 11748ce120d6efba9d4470de640a5061b6c8a43e
    });
});

module.exports = app