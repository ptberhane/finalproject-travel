
var axios = require ("axios");
var geocoder = ("geocoder");

//If need TripExpert Api Key

let tripExpApiKey = "8bed1c3e068b84f0388ec817dd255fd4";

var todoHelper = {

    getTododata: function(city){
         return axios.get("/todo/"+city);
     },

//get the venue_type = 3, Attractions

//get the venue_type = 2 Restaurants 
};

// We export the helpers function (which contains getGithubInfo)
module.exports = todoHelper;

