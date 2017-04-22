var passport = require('passport');
var Account = require('../models/account.js');
var router = require('express').Router();

//
LocalStrategy = require('passport-local').Strategy;

//
router.post('/register', function (req, res, next) {
  console.log(req.body);
  Account.register(new Account({
    username: req.body.username
  }), req.body.password, function (err) {
    if (err) {
      console.log('error registering user!');
      res.status(400).send({ success: false, message: err });
    }
    else {
      res.json({});
    }
  });
});

//
router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (!user) {
      return res.status(401).send({ success: false, message: 'authentication failed' });
    }
    req.login(user, loginErr => {
      if (loginErr) {
        return next(loginErr);
      }
      return res.send({ user: user });
    });
  })(req, res, next);
});

//
router.get('/api/users/me',
  passport.authenticate('basic', { session: false }),
  function (req, res) {
    res.json({
      id: req.user.id,
      username: req.user.username
    });
  });

//
router.post('/logout', function (req, res) {
  req.logout();
  res.json({});
});

module.exports = router;