// Main starting point of application -
// node 5.5 does note have all ES6 so we'll use require for imports

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB setup
mongoose.connect('mongodb://localhost:auth/auth');
// test

// App Setup
app.use(morgan('combined')); // middleware: logging routes
app.use(cors());
app.use(bodyParser.json({ type:'*/*' })); // middleware: json parsing
router(app);

// Server Setup
const port = process.env.PORT || 3090; // setup port #
const server = http.createServer(app); // create server on + port routed to app
server.listen(port); // server listening on port
console.log('Server listening on:' + port); // show server is running in console
