//Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// create photoHelper so it can get city photos using axios.get()
var photoHelper = {
   
   getCityPhotos: function(city){
       return axios.get("/photofinders/"+city);
   },
 
};


// We export the photoshelpers function (which contains getGithubInfo)
module.exports = photoHelper;