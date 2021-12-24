'use strict';

const { BaseError } = require('../../utils');
const htaccess = require('../../config/htaccess');

const authMessage = (req) => {
  const { ids } = htaccess;

  // eslint-disable-next-line eqeqeq
  if (!ids.find((id) => id == req.body.message.from.id)) {
    throw new BaseError('Not authorized, please pm the adminstrator.');
  }
};

module.exports = authMessage;
