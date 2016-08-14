const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs');

// Define our model
// email string as object for uniqueness, lowercase for MongoDB

const userSchema = new Schema({
  email: { type:String, unique:true, lowercase:true },
  password: String
});

// On Save Hook, encryot password
userSchema.pre('save',function(next) {
  const user = this;

  bcrypt.genSalt(10,function(err,salt) {
    if (err){ return next(err); }
    bcrypt.hash(user.password, slat, null, function(err,hash) {
      if (err){ return next(err); }

      user.password = hash;
      next();
    });
  });
});

// Create a model class
const ModelClass = mongoose.model('user',userSchema);

// Export model
module.exports = ModelClass;
