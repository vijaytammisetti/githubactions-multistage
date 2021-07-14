// Express App Setup
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialization
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers
app.get('/', (req, res) => {
  res.status(200).send('Simple Node App Working!');
});

module.exports = app;
