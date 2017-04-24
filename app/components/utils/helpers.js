var axios = require("axios");

var numbeocode= "rqdu9bx9kc3deb";


var helpers = {

 runQuery: function(city) {

   console.log(city);

   //pull info from numbeo for info on page2
   var cityqueryURL = "https://www.numbeo.com/api/city_climate?api_key="+ numbeocode+"&query=" + city
 
   return axios.get(cityqueryURL).then(function(response) {

     console.log(response);
     return response.data.results[0].formatted;
   });
 },
   runQuery1:function(city){
     var pricequeryURL = "https://www.numbeo.com//api/price_items?api_key="+ numbeocode+"&query=" + city

      return axios.get(pricequeryURL).then(function(response) {

     console.log(response);
     return response.data.results[0].formatted;
      });
   },

 getCitydata: function(){
     return axios.get("/city");
 },
 
};



// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;