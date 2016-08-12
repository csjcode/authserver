const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Define our model
// email string as object for uniqueness, lowercase for MongoDB

const userSchema = new Schema({
  email: { type:String, unique:true, lowercase:true },
  password: String
});


// Create a model class
const ModelClass = mongoose.model('user',userSchema);

// Export model
module.exports = ModelClass;
