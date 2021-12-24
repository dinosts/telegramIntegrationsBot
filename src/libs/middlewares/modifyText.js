'use strict';

const modifyText = (text) => {
  try {
    text = text.replace('/', '');
    return {
      message: text,
    };
  } catch (err) {
    throw new Error('Could not modify message');
  }
};

module.exports = modifyText;
