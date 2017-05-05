// Dependencies
var express = require("express");
var axios = require('axios')
var path = require("path");
var request = require("request");
var geocoder = require('geocoder');

// Initialize Express
var app = express();

//create a function to get the data
const getData = axiosRes => axiosRes.data;

const getVenues = axiosObj => axiosObj.response.venues;

app.get("/todo/:city/:venue", function(req, res) {
  console.log('TODO');

//Send the request and sresponse to the server
const sendJson = dataToSend=> res.json(dataToSend);

  //Create a function using Geocoder to convert any search location to latitud and longitud
  
  // Geocoding 
  geocoder.geocode(req.params.city, function ( err, data ) {
    
    //Get the lat & lng from the geocoder data
    let latitude = data.results[0].geometry.location.lat;
    let longitude = data.results[0].geometry.location.lng;
        //console log the lat & lng
        console.log(latitude, longitude);

    //Set default venue_type to 2/restaurants
    var venue_type = 2
    
    //If the search location includes restaurants then venue_type is equal to 2
    if (req.params.venue === 'restaurants'){
       venue_type = 2

       //else if the search location includes attractions then venue_type is equal to 3
       } else if (req.params.venue === 'attractions') {
          venue_type = 3    
          };

    // set a queryurl to call the Tripexpert data     
    let searchURL = `https://api.tripexpert.com/v1/venues?order_by=distance&venue_type_id=${venue_type}&latitude=${latitude}&longitude=${longitude}&api_key=8bed1c3e068b84f0388ec817dd255fd4`
     
     //get axios call
     axios.get(searchURL)
      .then(getData)
      .then(getVenues)
      .then(sendJson)
      .then(console.log)

    //request and response
      request(searchURL, function(error, response, body) {
        // console.log("body", JSON.parse(body));
        res.json(JSON.parse(body));
      });

  });
    

});


 module.exports = app