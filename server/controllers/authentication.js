const User  = require('../models/user');

exports.signup = function (req,res,next) {
  // -- Test
  // res.send({success:'true'});
  // console.log(req.body);

  const email = req.body.email;
  const password = req.body.password;

  // See if user with a given email exists
  User.findOne({email:email},function(err,existingUser) {

  })

  // If user does exist, return error

  // If user does NOT exist, create and save user record.

  // Respond to request indicating user created




}
