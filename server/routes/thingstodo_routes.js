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

//create a function to parse the data response 
//const parseBody = 

app.get("/todo/:city/:venue", function(req, res) {
  console.log('TODO');

//Send the request and sresponse to the server
const sendJson = dataToSend=> res.json(dataToSend);

//Create a function using Geocoder to convert city to latitud and longitud

  // Geocoding 
  geocoder.geocode(req.params.city, function ( err, data ) {
    
    //Get the lat & lng from the geocoder data
    let latitude = data.results[0].geometry.location.lat;
    let longitude = data.results[0].geometry.location.lng;
        //console log the lat & lng
        console.log(latitude, longitude);

    var venue_type = 2

    if (req.params.venue === 'restaurants'){
       venue_type = 2
       } else if (req.params.venue === 'attractions') {
          venue_type = 3    
          }
           
    let searchURL = `https://api.tripexpert.com/v1/venues?order_by=distance&venue_type_id=${venue_type}&latitude=${latitude}&longitude=${longitude}&api_key=8bed1c3e068b84f0388ec817dd255fd4`
     
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
   
    //https://api.tripexpert.com/v1/categories?8bed1c3e068b84f0388ec817dd255fd4    
    // let url = "https://api.tripexpert.com/v1/categories?";
    // let api_key = "8bed1c3e068b84f0388ec817dd255fd4";
    // let searchLocation = req.params.city;
    // let queryURL = url + "api_key=" + api_key + "venue_type_id=2" + "venue_type_id=2";

  //Create the axios conection 
    // axios.get(searchURL)
    //     .then(getData)
    //     .then(next => {
    //         console.log('~~~~~~~~THINGSTODO!!!~~~~~~~~~~~~~~~~~~');
            
    //     });


    

});


 module.exports = app