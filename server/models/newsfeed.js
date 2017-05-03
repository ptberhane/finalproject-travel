// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a BlogSchema with the Schema class
var Newsfeed = new Schema({
  // name: a unique String
  title: {
    type: String,
    unique: true
  },

  //topic: unique String 
  link:{
  	type: String,
  	unique: true
  },

  // date: Date.now
  image: {
    type: String,
    unique: true
   },

  // title: a string
  
  post: {
    type: String,
    unique: true
  },

});

// Make a Blog model with the NoteSchema
var Newsfeed = mongoose.model("Newsfeed", Newsfeed);

// Export the Blog  model
module.exports = Newsfeed;
