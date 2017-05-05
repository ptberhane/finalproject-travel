// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var logger = require("morgan")
var mongoose = require("mongoose");
var passport = require("passport");
var blogRoutes = require("./server/routes/blog_routes");
var photoRoutes = require("./server/routes/photos_routes");
var infoRoutes = require("./server/routes/infoApi_routes");
var todoRoutes = require("./server/routes/thingsTodo_routes");

//var todoRoutes = require("./server/routes/thingsTodo_routes");
var blogScrape = require("./server/routes/blogScrape");
var newsFeed = require('./server/routes/newsfeed_routes');

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
mongoose.connect("mongodb://localhost/finalproject-travel");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function(){
  console.log("Mongoose connection successful.");
});

// Autentication 
// var Account = require('./models/account');
// //passport.use(new LocalStrategy(Account.authenticate()));
// passport.serializeUser(Account.serializeUser());
// passport.deserializeUser(Account.deserializeUser());

// var login = require('./routes/login_routes');
// app.use('/', login);


// Routes
// ======

//Main "/" Route. This will readirec the user to our render React appication 
app.get('/', function(req, res) {
 res.sendFile(__dirname + '../public/index.html');
});

//This will redirect to signup-form 
app.get('/signup', function (req, res, next) {
  res.render('signup');
});

// Blogs routes. this will redirect the user to the all blogs
app.use(blogRoutes);

// Use the photo routes
app.use(photoRoutes);

// Uses the infoRoutes
app.use(infoRoutes);

// Use the todoRoutes
//app.use(todoRoutes);



app.use(newsFeed);



// Listen on Port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});