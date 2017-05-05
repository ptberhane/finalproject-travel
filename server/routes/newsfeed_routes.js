// Dependencies
var express = require("express");
var path = require("path");

// Bring in our Models: Not and User
var newsfeed = require("../models/newsfeed.js")

// Initialize Express
var app = express(); 

app.get("/newsfeed", function(req, res) {
  // Grab every doc in the Articles array
  newsfeed.find({}, function(error, doc) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    // Or send the doc to the browser as a json object
    else {
      //console.log(doc);
      console.log("ABOUT TO RETURN!!!");
      res.send(doc);
    }
  });
});

module.exports = app;