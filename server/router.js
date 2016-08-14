const Authentication = require('./controllers/authentication');

module.exports = function (app) {
  app.post('/signup',Authentication.signup);
}



// -- Test route
// app.get('/',function(req, res, next) { // for GET request
//   res.send(['water','bottle','paper']);
// })
