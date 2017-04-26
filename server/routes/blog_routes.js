// Dependencies
var express = require("express");
var path = require("path");

// Bring in our Models: Not and User
var Blog = require("../models/Blog.js");
var User = require("../models/User.js");


// Initialize Express
var app = express();

//Create a function to get all blogs
function getAllBlogs(req, res) {
  // Find all notes in the blog collection with our Note model
  Blog.find({}, function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to the browser
    else {
      res.json(doc);
    }
  });
};

  // Route to see blogss we have added
  app.get("/blogs", getAllBlogs);

//get a function to get all blogs 
function getAllUsers (req, res) {
  // Find all users in the user collection with our User model
  User.find({}, function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to the browser
    else {
      res.json(doc);
    }
  });
};

  // Route to see what user looks like without populating
  app.get("/user", getAllUsers);

//crate a fuction to submit a blog  
function submit (req,res) {
  // Use our Blog model to make a new blog from the req.body
  var newBlog = new Blog(req.body);
  // Save the new note to mongoose
  newBlog.save(function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Otherwise
    else {
      // Find our user and push the new blog id into the User's blogss array
      Username.findOneAndUpdate({}, { $push: { "blogs": doc._id } }, { new: true }, function(err, newdoc) {
        // Send any errors to the browser
        if (err) {
          res.send(err);
        }
        // Or send the newdoc to the browser
        else {
          res.json(newdoc);
        }
      });
    }
  });
};
  // New note creation via POST route
  app.post("/submit", submit);

//Create a function to show the user blogs 
function populatedUser (req, res) {
  // Prepare a query to find all users..
    User.find({})
    // ..and on top of that, populate the blogs (replace the objectIds in the blogs array with bona-fide blogss)
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
};
  // Route to see what user looks like WITH populating
  app.get("/populateduser", populatedUser);


module.exports = app