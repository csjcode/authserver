const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs');

// Define our model
// email string as object for uniqueness, lowercase for MongoDB

const userSchema = new Schema({
  email: { type:String, unique:true, lowercase:true },
  password: String
});

// On Save Hook, encrypt password
userSchema.pre('save',function(next) { // Before model gets saved, run this function
  const user = this; // accessing user model

  bcrypt.genSalt(10,function(err,salt) { // generate salt, then run callback
    if (err){ return next(err); }
    bcrypt.hash(user.password, salt, null, function(err,hash) { // hash (encrypt) password using the salt.
      if (err){ return next(err); }

      user.password = hash; // overwrite plaintext password with encrypted password
      next(); // go ahead and save the model
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword,callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }

    callback(null, isMatch)
  })
}

// Create a model class
const ModelClass = mongoose.model('user',userSchema);

// Export model
module.exports = ModelClass;
