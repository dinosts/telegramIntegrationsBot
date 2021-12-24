'use strict';

const axios = require('axios');
const logger = require('./logger');

const handleErrors = (err, req, res, next) => {
  const { statusCode, message } = err;
  const { method, url } = req;

  logger.error(`ERROR: ${method} ${statusCode || 500} : ${url} : ${message}.`);

  res.status(statusCode || 500).json({
    success: false,
    message,
  });
};

module.exports = handleErrors;
