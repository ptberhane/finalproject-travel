var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
  username: {
  	type: String,
  	
  },
  password: {
  	type: String,
  	required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]

  }
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);