//Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// create photoHelper so it can get city photos using axios.get()
var newsfeedHelpers = {
   
   getNewsFeed: function(){
       return axios.get("/newsfeed/");
   },
 
};


// We export the photoshelpers function (which contains getGithubInfo)
module.exports = newsfeedHelpers;