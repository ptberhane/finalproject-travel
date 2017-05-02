// Dependencies
var express = require('express');
var router = express.Router();

/* GET create page. */

var creation = require("../models/users.js");

router.get('/signup', function (req, res, next) {
  res.render('signup');
});

module.exports = router;

