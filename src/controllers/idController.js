'use strict';

const axios = require('axios');

const telegramId = async (set) => {
  const { chatId, req } = set;

  try {
    await axios.post(`${process.env.TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: `Your id is ${req.body.message.from.id}`,
    });
  } catch (err) {
    await axios.post(`${process.env.TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: `${err.message}`,
    });
  }
};

module.exports = telegramId;
