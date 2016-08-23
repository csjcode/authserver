# authserver

* >npm run dev

### User Authentication API server with Node.js, Express, Mongoose, MongoDB, Bcrypt, JWT, Passport

Based on auth server in the Udemy course Advanced React

## AUTH SERVER SETUP Notes:

Server Setup - Authentication - Sections (27)

### 59 - Introduction to Authentication 4:32

* Authentication diagram

### 60 - Cookies vs Tokens 4:57

* Cookies vs Tokens diagram

### 61 - Scalable Architecture 4:49

* Scalable Architecture diagram

### 62 - Server Setup 3:45

* in server/ >npm init
* >npm install --save express mongoose morgan body-parser
* server/index.html and .gitignore

### 63 - More Server Setup 5:41

* node 5.5 does note have all ES6 so we'll use require for imports
* import express, http, bodyParser, morgan, app
* setup port, server, server.listen and log

### 64 - Express Middleware 6:29

* add morgan and bodyParser middleware to app setup
* >npm install --save nodemon (watch directory for changes and restarts server on script change)
* add dev to json.package
* > npm run dev

### 65 - Express Route Handler 6:09

* create router.js, export.module
* import into index.js
* edit index to add router(app);

### 66 - Mongoose Models 10:22

* make a User Model with Mongoose with email and password
* create models folder + models/user.js
* import mongoose and Schema
* setup schema in model

### 67 - MongoDB Setup 6:29

* mongo installed
* on windows: C:\Program Files\MongoDB\Server\3.2\bin\mongo.exe
* start in new command window

### 68 - Inspecting the Database 6:19

* import mongoose in index.js
* setup DB in index.js
* confirm connection by viewing mongodb console for new connection listening
* Download robomongo, create connection
* make sure to restart mongodb to use robomongo

### 69 - Authentication Controller 4:57

* create controllers/authentication.js
* add new authentication post in router.js
* update authentication controller with send
* check for success with postman in chrome(http://localhost:3090/signup)

### 70 - Searching for Users 7:57
* read in user if passed, check if email exists, if not: save
* req.body gets contents of req (request)
* in postman select Body -> raw and JSON
* add email and password info & test with console log (shos in server console))
* add user model into controllers/authentication

### 71 - Creating User Records 6:31
*  fill out authentication controllers, connect to user model (mongoose)
*  test in server console and postman

### 72 - Encrypting Passwords with Bcrypt 8:12

* add a check to verify email/password - make sure exists
* >npm install --save bcrypt-nodejs
* import bcrypt to user.js
* save, hook and encrypt password

### 73 - Salting a Password 6:16

### 74 - JWT Overview 4:58

* see diagram

### 75 - Creating a JWT 7:13

* >npm install --save jwt-simple
* create config.js file with secret string
* import jwt-simple & config into authentication controller
* add tokenForUser function
* now edit res.json({token:tokenForUser(user)});
* addiitonal resources: https://jwt.io/

### 76 - Installing Passport 5:50

* Check login intercept with passport.js
* >npm install --save passport passport-jwt
* mkdir server\services & server\services\passport.js
* require 5 modules


### 77 - Passport Strategies 8:55

* goals: create some jwt options, create jwt strategy, tell passport to use this strategy

### 78 - Using Strategies with Passport 4:02

* fill out jwtOptions - add jwtRequest to get string from the header
* secretOrKey: config.secret
* tell passport to use this strategy -  passport.use(jwtLogin);

### 79 - Making an Authenticated Request 5:55

* make changes to router to require authorization on a certain route
* postman send GET http://localhost:3090/
* this part is a bit tricky... in postman signup with the POST http://localhost:3090/signup
* copy the token only (received after submitting)
* change to GET http://localhost:3090/ - add 2 lines to Headers (key:value)
* Content-Type: application/json ....  authorization: [input the token copied]

### 80 - Signing in with Local Strategy 5:37

* Different strategy, local data
* >npm install --save passport-local

### 81 - Purpose of Local Strategy 4:17

### 82 - Bcrypt Full Circle 5:08

* Add comparePassword method salt/password to user.js (6.82)

### 83 - Protecting Signin Route 4:12

* Add comparePassword method to passport.js
* Bottom of passport.js, tell passport to use localStrategy
* Go to router to add POST to Signin
* authenticate.js export signin

### 84 - Signing Users In 4:04

* we need to get the current user model inside the signin function
* done - Postman check in postman, for testing - careful of typo (!user) vs (err) in passport.js
* POST sign up: http://localhost:3090/signup
* POST sign in: http://localhost:3090/signin
* GET (must include authorization/content-type json in header) authenticate for restricted resource: http://localhost:3090/

### 85 - Server Review

--------------------------

## AUTH CLIENT SETUP Notes:

Based on auth server client-side in the Udemy course Advanced React

### 86 - Client Setup 2:28

* Download ReduxSimpleStarter
* >npm install

### 87 - App Architecture 5:48

* >npm run start
* http://localhost:8080/
* Route Wireframe image  
* 5 routes - /, /signin, /signup, /feature, /signout

### 88 - Component and State Design 7:30

* Component diagram
* Application state diagram
* Add initial Route
* index.js: import { Router, Route, IndexRoute, browserHistory } from 'react-router';
* Route inside Provider - <Router history={browserHistory} /> <Route path="/" component={App}>
* test: http://localhost:8080/

### 89 - Header Component 4:17

* Create Header component
* Make header.js - import Component & react, Header extends Component, export default Header
* app.js - add <Header />

### 90 - Scaffolding the Signin Form 11:03

* create auth folder - client\src\components\auth
* create signin.js component
* >npm install --save redux-form
* export default reduxForm(
* in signin.js import reduxForm
* in reducers/index import reducer from redux-form
* Tip, you can do this ("as form") in ES6 : import { reducer as form } from 'redux-form';
* this allows you change reducer to  form: form (instead of form: reducer)
* this can be further refactored to just form (in ES6 with curly braces its same as form:form)
* set up sign in form in sign.js

### 91 - Adding Signin Form 5:58

* Add to signin.js - handleSubmit = this.props
* In signin.js - Add email and password helpers
* Listen for onSubmit
* make handleFormSubmit function
* import and hook up to App component so we can see the form.
* in app.js {this.props.children}
* check here: http://localhost:8080/signin
* enter user/pass and see it come up in console

### 92 - Action Creator with Many Responsibilities 8:22

* When submitting form we need to connect ti to the server
* We need an Action Creator with a callback to handle invalid submits, errors
* see: action-creator-form-flow.Protecting
* edit actions/index.js

### 93 - Introducing Redux Thunk 7:10

* see: action-flow-full-diagram.png
* >npm install --save redux-thunk
* must import in  src/index.js
* in index.js add to apply middleware chain
* normally - action creator always return an object, the object is an "action", and the action has a "type"
* however, with thunk - the action creator returns a function. (to get direct access to the dispatch method, allowing us to dispatch actions when we want)
* all logic for action creator can go inside the return function

### 94 - Signin Action Creator 10:38

* we'll be submitting email/password to api server
* startup api server (npm run start and mongod) running on port 3090
* in actions/index declare const ROOT_URL = 'http://localhost:3090/';
* to make the ajax request we'll use axios library
* >npm install --save axios
* >npm run start
* actions/index - add import and post.axios
* signin.js - import * as actions from '../../actions';
* signin.js - expor default reduxForm - add: ,null, actions to access to all actions on props.
* signin.js -  this.props.signinUser({email, password});

### 95 - CORS In a Nutshell 9:13
### 96 - Serverside Solution for CORS 6:16

* [in server dir] >npm install --save cors
* try again - http://localhost:8080/signin
* must be signing in with a previous user/email (check robomongo)
* check for token response in devconsole XHR > Response > JSON

### 97 - Programmatic Navigation 7:11

* add then & catch to axios call in actions/index (promises)
* add programmatic navigation: redirect to link
* import { browserHistory } from \'react-router\'; browserHistory.push(\'/feature\')
* test to redirret to feature : http://localhost:8080/signin

### 98 - Updating Auth State 6:29

* setup authReducer in reducers/index and auth_reducer.js
* add authenticate case and flags to auth_reducer
* add actions/types.js`

### 99 - Breather and Review 5:39

* good walkthough of the client code until now.

### 100 - LocalStorage and JWT 6:39

* saving the JWT token with  the action creator - where? - LocalStorage
* LocalStorage code in actions/index
* check browser: http://localhost:8080/signin
* sign in and refresh page
* check Chrome console local storage: localStorage.getItem('token') - should show token

### 101 - Auth Error Messaging 4:36
* add auth_error to types file
* make a new action creator authError in actions/index
* make sure to import type into actions/index file


### 102 - Displaying Errors 4:40

* Add error to auth_reducer
* in signin.js add mapStateToProps
* signin.js: add Error msg renderAlert function
* obfuscate password field (input type)

### 103 - Header Logic 10:29

* make header.js a container: import { connect } from 'react-redux';
* import Link
* add connect helper to export statement
* add mapStateToProps
* renderLinks method for which buttons to display
* (we also use an array of components for the signin and signout part)
* make sure to add keys in the component array, we use static keys
* test: http://localhost:8080/signin
* still have to do dome debugging

### 104 - Signout Component 5:32

* Correct error in last section - add mapStateToProps in export connect helper
* create: client\src\components\auth\signout.js
* setup Signout component
* in src/index.js import signout.js, add route

### 105 - Signout Action Creator 4:45

* Action creator for Signout to finish Signout component
* types.js - make sure action type has ben specified, in this case UNAUTH_USER
* in actions/index import UNAUTH_USER
* make function called signoutUser
* we need to also get rid of the token we saved
* localStorage.removeItem('token');

### 106 - Signup Component 4:12

* create signup.js
* Scaffold out Signup component
* Add import and route for Signup
* test: http://localhost:8080/signup

### 107 - Signup Form Scaffolding 8:02

* Login scaffolding diagram (7.107)
* signup.js: export default reduxForm({
* Signup form with redux-form (7.107)
* Front-end of Signup form (7.107) email, password, passwordConfirm

### 108 - Redux Form Validation 4:30
### 109 - Implementing Validation Logic 9:28
### 110 - More On Validation 5:40
### 111 - Signup Action Creator 7:11
### 112 - Finish Up Signup 8:55
### 113 - Securing Individual Routes 10:21
### 114 - Root IndexRoute 2:34
### 115 - Automatically Authenticating Users 7:11
### 116 - Making Authenticated API Requests 8:01
### 117 - Handling Data from Authenticated Requests 5:13
### 118 - Authentication Wrapup 3:29
