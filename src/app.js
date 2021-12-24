'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const handleNotFound = require('./utils/handleNotFound');
const { handleErrors } = require('./utils/errors');
const axios = require('axios');
const BotListener = require('./BotListener/botListener');

const app = express();

app.use(bodyParser.json());

app.use(BotListener);

app.use(handleNotFound);
app.use(handleErrors);

module.exports = app;
