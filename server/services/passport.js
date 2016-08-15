const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStategy = require('passport-local');

// Create local strategy
const localOptions = { usernameField = 'email'};
const localLogin = new LocalStrategy(localOptions, function(email,password,done) {
  // verify username password
});

// create some jwt options
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions,function(payload,done) {
  // See if user ID in the payload exists in our database
  // if it does call done with that other
  // otherwise, call done without a user object
  User.findById(payload.sub, function (err,user) {
    if (err) { return done(err, false);}

    if(user){
      done(null, user);
    } else {
      done(null, false);
    }

  });
});

// tell passport to use this strategy
passport.use(jwtLogin);
