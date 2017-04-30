// Require mongoose
var mongoose = require('mongoose');

// Create a Schema class with mongoose
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
  username: {
  	type: String,
  	
  },
  password: {
  	type: String,
  	required: "Password is Required",
    validate: 
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  }
});

Account.plugin(passportLocalMongoose);

// Export the user model
module.exports = mongoose.model('Account', Account);