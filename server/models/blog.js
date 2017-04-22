// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a BlogSchema with the Schema class
var BlogSchema = new Schema({
  // name: a unique String
  username: {
    type: String,
    unique: true
  },

  //topic: unique String 
  topic:{
  	type: String,
  	unique: true
  },

  // date: Date.now
  date: {
    type: Date,
	    //Date.now it defaults the date as happening when the server is started. 
	    default: Date.now
   },

  // title: a string
  
  title: {
    type: String
  },

  // body: a string
  body: {
    type: String
  }

  //add tag

  tag: {
  	type: String

  }

});

// Make a Blog model with the NoteSchema
var Note = mongoose.model("Blog", BlogSchema);

// Export the Blog  model
module.exports = Blog;
