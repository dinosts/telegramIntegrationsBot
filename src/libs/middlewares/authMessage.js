'use strict';

const { htaccess } = require('../../config');

const authMessage = (req) => {
  const { ids } = htaccess;

  // eslint-disable-next-line eqeqeq
  if (!ids.find((id) => id == req.body.message.from.id)) {
    throw new Error('Not authorized, please pm the adminstrator.');
  }
};

module.exports = authMessage;
