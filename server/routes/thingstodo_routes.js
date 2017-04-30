// Dependencies
var express = require("express");
var axios = require('axios')
var path = require("path");
var request = require("request");

// Initialize Express
var app = express();

//create a function to get the data
const getData = axiosRes => axiosRes.data;

//

// Create route for the thingstodo
app.get("/Todo/:city", function(req, res) {

//Send the request and sresponse to the server
const sendJson = dataToSend=> res.json(dataToSend);
    
    //"https://api.tripexpert.com/v1/venues?destination_id=6&amenity_ids[]=31&amenity_ids[]=32"
    let url = 'https://api.tripexpert.com/v1/venues';
    let api_key = "8bed1c3e068b84f0388ec817dd255fd4";
    let todoLocation = req.params.city;
    let queryURL = url + "&api_key=" + api_key + "&text=" + todoLocation + "&format=json";

    axios.get(searchURL)
        .then(getData)
        .then(removeFlickWrap)
        .then(parseBody)
        .then(getPhotoArray)
        .then(mapUrls)
        .then(sendJson)
        .then(next => {
            console.log('~~~~~~~~NEXT ARRAY~~~~~~~~~~~~~~~~~~')
            
        });

     // Create variables for the url


     //Request function response
      //request(queryURL, function(error, response, body) {
     
      //console.log(response.body);
     
    

      //console.log(responseString);

      //body = JSON.parse(correctString);
      //console.log(body);
    });
      
});


module.exports = app