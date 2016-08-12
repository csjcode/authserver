module.exports = function (app) {
  app.get('/',function(req, res, next) { // for GET request
    res.send(['water','bottle','paper']);
  })
}
