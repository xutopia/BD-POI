require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());


app.use(express.static(path.join(__dirname, '/../dist')));
app.use(express.static(path.join(__dirname, '/lib')));

const port = process.env.PORT || 8000;

module.exports = app.listen(port, function() {
  console.log('Listening on port ', port);
});
