var axios = require("axios");

var flickrcode= "e1459225c0568c62f9ded2b23fb937c3";

var photos= {

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



// We export the helpers function (which contains getGithubInfo)
module.exports = Photoshelpers;