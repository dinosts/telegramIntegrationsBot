

'use strict';

const botListener = require('express').Router();
const axios = require('axios');
const authMessage = require('../libs/middlewares/authMessage');
const modifyText = require('../libs/middlewares/modifyText');
const Routes = require('../Router/Routes');
const BaseError = require('../utils/errors/BaseError');

const { TELEGRAM_API, URI, WEBHOOK_URL, PASS } = process.env;

botListener.post(URI, async (req, res) => {
	let chatId = -629123474;
	try {

		chatId = req.body.message.chat.id;

		const { message: { text } } = req.body;

		const set = {
			req,
			...modifyText(text),
			chatId
		};


		authMessage(req);

		if (!set.message) throw new BaseError('Message Not Found');

		Routes(set);


	} catch (err) {

		await axios.post(`${TELEGRAM_API}/sendMessage`, { chat_id: chatId, text: err.message });

	}








	return res.send();
});


module.exports = botListener;

