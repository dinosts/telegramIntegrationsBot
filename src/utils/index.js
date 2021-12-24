const logger = require('./logger');
const handleNotFound = require('./handleNotFound');
const handleErrors = require('./handleErrors');
const BaseError = require('./errors/BaseError');

module.exports = {
  logger,
  handleNotFound,
  handleErrors,
  BaseError,
};
