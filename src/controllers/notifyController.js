/* eslint-disable security/detect-object-injection */
'use strict';

const axios = require('axios');

const notifyController = async (set) => {
  try {
    const { chatId, message, res } = set;
    const group = process.env.NOTIFYGROUP.split(',');
    const msg = message.replace('notify ', '');

    for (const person in group) {
      await axios.post(`${process.env.TELEGRAM_API_NOTIFY}/sendMessage`, {
        chat_id: parseInt(group[person], 10), // Number
        text: msg,
      });
    }
  } catch (err) {
    await axios.post(`${process.env.TELEGRAM_API}/sendMessage`, {
      chat_id: set.chatId,
      text: err.message,
    });
  }
};

module.exports = notifyController;
