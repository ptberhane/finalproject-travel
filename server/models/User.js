// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a UserSchema with the Schema class
var UserSchema = new Schema({
  // name: a unique String
  username: {
    type: String,
    unique: true
  },
  // notes property for the user
  blog: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Note model
    ref: "Blog"
  }]
});

// Create the User model with the UserSchema
var User = mongoose.model("User", UserSchema);

// Export the user model
module.exports = User;