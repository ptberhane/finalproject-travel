//Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var flickrApi = {}

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(location) {

    console.log(flickrAPI);

    // Figure out the geolocation
    var queryURL = "http://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos" + photos + "&api_key=" + api_key;
    
    //&user_id=user_id_

    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      return ();
    });
  },

  // This function hits our own server to retrieve the record of query results
  getFlickrphotos: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postFlickrphotos: function(location) {
    return axios.post("/api", { photos: photos });
  }
  
};

// We export the API helper
module.exports = helper;