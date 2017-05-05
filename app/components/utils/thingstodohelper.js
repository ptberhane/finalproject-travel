import axios from 'axios';
import geocoder from 'geocoder';

//If need TripExpert Api Key
let tripExpApiKey= "8bed1c3e068b84f0388ec817dd255fd4";


var todoHelper = {

     getTododata: function(city){
         return axios.get("/todo/"+city);
     },
 
};

// We export the helpers function (which contains getGithubInfo)
module.exports = todoHelper;