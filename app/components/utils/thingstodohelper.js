import axios from 'axios';

let tripExpApiKey= "8bed1c3e068b84f0388ec817dd255fd4";


var todoHelper = {

     runVenuesQuery: function(city) {

       console.log(thingstodo);

       //pull info from numbeo for info on page2
       var thingsTodoqueryURL = "https://api.tripexpert.com/v1/venues/636532?latitude=40.716236&longitude=-73.965237&api_key="+ tripExpApiKey +"&query=" + city;
     
       return axios.get(thingsTodoqueryURL).then(function(response) {
         console.log(response);
         return response.data.results[0].formatted;
       });
     },

     runCategoriesQuery:function(city) {
        var thingsToEatqueryURL = "https://api.tripexpert.com/v1/categories?venue_type_id=2/636532?latitude=40.716236&longitude=-73.965237&api_key="+ tripExpApiKey + "&query=" + city;
        return axios.get(thingsToEatqueryURL).then(function(response) {
          console.log(response);
          return response.data.results[0].formatted;
        });
     },

     runCategoriesQuery1:function(city) {
        var thingsToVisitqueryURL = "https://api.tripexpert.com/v1/categories?venue_type_id=3/636532?latitude=40.716236&longitude=-73.965237&api_key="+ tripExpApiKey + "&query=" + city;
        return axios.get(thingsToVisitqueryURL).then(function(response) {
          console.log(response);
          return response.data.results[0].formatted;
        });
     },

     getCitydata: function(city){
         return axios.get("/todo/"+city);
     },
 
};

// We export the helpers function (which contains getGithubInfo)
module.exports = todoHelper;