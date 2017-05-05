//SERVER API 
//all back express
//ENDPOINTS ARE CREATE
//----------------------------------------//

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var logger = require("morgan")
var mongoose = require("mongoose");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Use morgan with our app
app.use(logger("dev"));

// Static directory
app.use(express.static(path.join(__dirname, 'public')));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Routes
// ======


// Listen on Port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});

