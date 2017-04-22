// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var logger = require("morgan")
var mongoose = require("mongoose");
var passport = require("passport");


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

// Autentication 
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

var login = require('./routes/login-routes');
app.use('/', login);


// Routes
// ======

// Route to see blogss we have added
app.get("/blogs", function(req, res) {
  // Find all notes in the note collection with our Note model
  Note.find({}, function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to the browser
    else {
      res.send(doc);
    }
  });
});

// Route to see what user looks like without populating
app.get("/user", function(req, res) {
  // Find all users in the user collection with our User model
  User.find({}, function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to the browser
    else {
      res.send(doc);
    }
  });
});


// New note creation via POST route
app.post("/submit", function(req, res) {
  // Use our Blog model to make a new note from the req.body
  var newBlog = new Blog(req.body);
  // Save the new note to mongoose
  newBlog.save(function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Otherwise
    else {
      // Find our user and push the new blog id into the User's notes array
      Username.findOneAndUpdate({}, { $push: { "notes": doc._id } }, { new: true }, function(err, newdoc) {
        // Send any errors to the browser
        if (err) {
          res.send(err);
        }
        // Or send the newdoc to the browser
        else {
          res.send(newdoc);
        }
      });
    }
  });
});

// Route to see what user looks like WITH populating
app.get("/populateduser", function(req, res) {
  // Prepare a query to find all users..
  User.find({})
    // ..and on top of that, populate the blogs (replace the objectIds in the notes array with bona-fide notes)
    .populate("blogs")
    // Now, execute the query
    .exec(function(error, doc) {
      // Send any errors to the browser
      if (error) {
        res.send(error);
      }
      // Or send the doc to the browser
      else {
        res.send(doc);
      }
    });
});

// Listen on Port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});

