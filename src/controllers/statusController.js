'use strict';

const axios = require('axios');
const { BaseError } = require('../utils');
const servers = require('../config/servers');
const removeUndefined = require('../libs/tools/removeUndefined');
const beautify = require('json-beautify');

const statusController = async (set) => {
  const { chatId, req, message } = set;

  try {
    if (message.split(' ').length === 1) {
      const simple = Object.values(removeUndefined(Object.keys(servers)));
      await axios.post(`${process.env.TELEGRAM_API}/sendMessage`, {
        chat_id: chatId,
        text: beautify(simple, null, 2, 80),
      });
      return;
    }

    if (message.split(' ').length !== 2) {
      throw new BaseError('used status wrong.');
    }

    const [command, target] = message.split(' ');
    const serverNames = Object.keys(servers);

    if (!serverNames.find((server) => server === target)) {
      throw new BaseError('server not found');
    }

    const { data: response } = await axios.post(
      // eslint-disable-next-line security/detect-object-injection
      `${servers[target].url}/api/v1/status/check`,
      { secret: servers[target].pass }
    );

    const { bridge, erp, eshop } = response;

    await axios.post(`${process.env.TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: `Bridge : ${bridge.status} - { Type: ${bridge.TYPE}, version: ${bridge.version} } ,\nERP : ${erp.status} - { Type: ${erp.data_provider}, version: ${eshop.version} },\nEshop : ${eshop.status}`,
    });
  } catch (err) {
    await axios.post(`${process.env.TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: `${err.message}`,
    });
  }
};

module.exports = statusController;
