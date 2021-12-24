'use strict';

require('dotenv').config();
const express = require('express');

const handleNotFound = require('./utils/handleNotFound');
const { handleErrors } = require('./utils');
const botListener = require('./botListener/botListener');

const app = express();

app.use(express.json());

app.use(botListener);

app.use(handleNotFound);
app.use(handleErrors);

module.exports = app;
