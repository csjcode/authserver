const jwt = require('jwt-simple');
const User  = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({sub: user.id, iat:timestamp}, config.secret); // jwt is convention, sub means "subject"
}

exports.signup = function (req,res,next) {

  // res.send({success:'true'}); // -- Test
  // console.log(req.body);

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password){
    return res.status(422).send({ error: "You must provide email & password"});
  }

  User.findOne({email:email},function(err,existingUser) { // See if user with a given email exists
    if (err) { return next(err); }

    if (existingUser){   // If user does exist, return error
      return res.status(422).send({"error":"Email is in use"}) // set http code for returning error to not process
    }

    // If user does NOT exist, create and save user record.
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if (err) { return next(err); }

      // Respond to request indicating user created
      // res.json(user); // testing
       res.json({token:tokenForUser(user)});

    });


  });








}
