//To access our API, if you want to use http connection please use URL prefix:
// http://www.numbeo.com:8008/api/ (this might not work in browser due to HSTS while 
//it should work in command line clients such as wget or curl). If you want to use secure 
//https connection please use URL prefix https://www.numbeo.com/api/
//=============================================
// Dependencies
var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");
var request = require("request");

// Initialize Express
var app = express();

//
var api_key = "rqdu9bx9kc3deb"; 

app.get("/city/:id") function (req, res){
    //api_key: Your API Key
	//use: /api/cities?api_key=your_api_key


};



//get the weather in this location 
app.get("/weather/:id") function (req, res){


	//api_key:	Your API Key: yes
	//query:	Name or geolocation of the place for which result is requested. Internationalized or ambigous names are usually ok.
	//city:	City name (as in numbeo database)	
	//country:	Country name (as in numbeo database or ISO 3166 code)	
	//city_id:	Internal city id (as in numbeo database)
	//use: /api/city_climate?api_key=your_api_key&query=Belgrade



};

// Export the app 
module.exports = app
