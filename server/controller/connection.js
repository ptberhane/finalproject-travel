// Require Dependencies
var mongoose = require('mongoose');
var Promise = require("bluebird");
mongoose.Promise = Promise;

//Initialize Mongoose
mongoose.connect('mongodb:horuko');

// Save our mongoose connection to db
var db = mongoose.connection;

// If there's a mongoose error, log it to console
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once we "open" a connection to mongoose, tell the console we're in
db.once("open", function() {
    console.log("Mongoose connection successful.");
});
module.exports = db;