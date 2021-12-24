'use strict';

const BaseError = require('./errors/BaseError');

const handleNotFound = (req, res, next) => {
  next(new BaseError('endpoint not found', 404));
};

module.exports = handleNotFound;
