# authserver

### User Authentication API server with Node.js, Express, Mongoose, MongoDB, Bcrypt, JWT, Passport

Based on auth server in the Udemy course Advanced React

### Notes:

Server Setup - Authentication - Sections (27)

59 - Introduction to Authentication 4:32

* Authentication diagram

60 - Cookies vs Tokens 4:57

* Cookies vs Tokens diagram

61 - Scalable Architecture 4:49

* Scalable Architecture diagram

62 - Server Setup 3:45

* in server/ >npm init
* >npm install --save express mongoose morgan body-parser
* server/index.html and .gitignore

63 - More Server Setup 5:41

* node 5.5 does note have all ES6 so we'll use require for imports
* import express, http, bodyParser, morgan, app
* setup port, server, server.listen and log

64 - Express Middleware 6:29

* add morgan and bodyParser middleware to app setup
* >npm install --save nodemon (watch directory for changes and restarts server on script change)
* add dev to json.package
* > npm run dev

65 - Express Route Handler 6:09

* create router.js, export.module
* import into index.js
* edit index to add router(app);

66 - Mongoose Models 10:22

* make a User Model with Mongoose with email and password
* create models folder + models/user.js
* import mongoose and Schema
* setup schema in model

67 - MongoDB Setup 6:29

* mongo installed
* on windows: C:\Program Files\MongoDB\Server\3.2\bin\mongo.exe
* start in new command window

68 - Inspecting the Database 6:19

* import mongoose in index.js
* setup DB in index.js
* confirm connection by viewing mongodb console for new connection listening
* Download robomongo, create connection
* make sure to restart mongodb to use robomongo

69 - Authentication Controller 4:57

* create controllers/authentication.js
* add new authentication post in router.js
* update authenticaton controller with send
* check for success with postman in chrome(http://localhost:3090/signup)

70 - Searching for Users 7:57
* read in user if passed, check if email exists, if not: save
* req.body gets contents of req (request)
* in postman select Body -> raw and JSON
* add email and password info & test with console log (shos in server console))
* add user model into controllers/authentication


71 - Creating User Records 6:31

72 - Encrypting Passwords with Bcrypt 8:12

73 - Salting a Password 6:16

74 - JWT Overview 4:58

75 - Creating a JWT 7:13

76 - Installing Passport 5:50

77 - Passport Strategies 8:55

78 - Using Strategies with Passport 4:02

79 - Making an Authenticated Request 5:55

80 - Signing in with Local Strategy 5:37

81 - Purpose of Local Strategy 4:17

82 - Bcrypt Full Circle 5:08

83 - Protecting Signin Route 4:12

84 - Signing Users In 4:04

85 - Server Review
