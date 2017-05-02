//api_key: "e1459225c0568c62f9ded2b23fb937c3",
// secret: "0cdfa647c3e3e6f1"
// https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=e1459225c0568c62f9ded2b23fb937c3&text=London&format=json

// Dependencies
var express = require("express");
var axios = require('axios')
var path = require("path");
var request = require("request");

// Initialize Express
var app = express();

//create a function to get the data
const getData = axiosRes => axiosRes.data;
          // function pullData(response){
          //   return  response.data
          // }
//create a function to remove the frikrwraper ()
const removeFlickWrap = string => string.slice(14, -1);

//create function to parse the flikr body{}
const parseBody = string => JSON.parse(string);

//create a function to get the array of photos.photo
const getPhotoArray = jsonResponse => jsonResponse.photos.photo;

//Create  for each single picture a makeUrl using: https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg 
const makeUrl = pic => `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;

//create a function so once each picture has a makeUrl is map 
const mapUrls = picArray => picArray.map(makeUrl); 


app.get("/photofinders/:city", function(req, res) {

//Send the request and sresponse to the server
const sendJson = dataToSend=> res.json(dataToSend);

    let url = `https://api.flickr.com/services/rest/?&method=flickr.photos.search`;
    let api_key = "e1459225c0568c62f9ded2b23fb937c3";
    let searchLocation = req.params.city;
    //console log the location
    console.log("search location " + searchLocation);
    let searchURL = url + "&api_key=" + api_key + "&text=" + searchLocation + "&format=json";

    // let searchURL =
    //     `https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=e1459225c0568c62f9ded2b23fb937c3&text=${searchLocation}&format=json`
  
  //Create the axios conection 
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

    request(searchURL, function(error, response, body) {

//         console.log("RESBOD", response.body);

//         // var responseString = response.body;
//         // var correctString = responseString.slice(14, -1);


//         //console.log(responseString);

//         body = JSON.parse(correctString);
//         console.log("PARSEBOD", body);

//         var arrayOfUrls = [];
//         picArray= body.photos.photo;

//         for (var i = 0; i < picArray.length; i++) {

//             // Variables   
//             farmId = picArray[i].farm;
//             serverId = picArray[i].server;
//             id = picArray[i].id;
//             secret = picArray[i].secret;

//             //Create the photosUrl using: https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
//             photosUrl = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;

//             //console.log the photosUrl
//             //console.log("photosUrl", photosUrl);

//             arrayOfUrls.push(photosUrl);

//         }
// console.log(arrayOfUrls);
//         //res.send(arrayOfUrls);

    });
});


module.exports = app