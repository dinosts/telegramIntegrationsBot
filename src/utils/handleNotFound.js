'use strict';

const handleNotFound = (req, res, next) => {
  next(new Error('endpoint not found', 404));
};

module.exports = handleNotFound;
