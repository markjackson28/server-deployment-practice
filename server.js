'use strict';

const express = require('express');
require('dotenv').config();
const app = express();

// Importing the handlers
const notFoundHandler = require('./handlers/404');
const errHandler = require('./handlers/500');

// Hard coded data to display in browser
const dog = {
  name: 'Oreo',
  age: 8,
};

// Root route for data to show
app.get('/data', (req, res) => res.status(200).json(dog));

// Uses the handlers
app.use('*', notFoundHandler);
app.use(errHandler);

// What port listening on terminal
function start(port) {
  app.listen(port, () => console.log(`Server up on ${port}`))
}
// start(3000);

module.exports = {
  app: app,
  start: start
}
