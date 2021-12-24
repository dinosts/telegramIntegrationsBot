'use strict';

const { BaseError } = require('../../utils');

const modifyText = (text) => {
  try {
    text = text.replace('/', '');
    return {
      message: text,
    };
  } catch (err) {
    throw new BaseError('Could not modify message');
  }
};

module.exports = modifyText;
