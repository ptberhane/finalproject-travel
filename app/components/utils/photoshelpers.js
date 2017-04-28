//Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Flikr API
var flickrcode= "e1459225c0568c62f9ded2b23fb937c3";

var photoHelper = {

 runQuery: function(city) {

   console.log(city);

   //pull info from numbeo for info on page2
   var photosqueryURL = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search'+flickrcode+"&text="+city;
 
   return axios.get(photosqueryURL).then(function(response) {

     console.log(response);
     return response.data.results[0].formatted;
   });
 },
   

 getCitydata: function(city){
     return axios.get("/photofinders/"+city);
 },
 
};


// We export the photoshelpers function (which contains getGithubInfo)
module.exports = photoHelper;