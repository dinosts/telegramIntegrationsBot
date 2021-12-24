const axios = require('axios');
const BaseError = require('../utils/errors/BaseError');
const servers = require('../config/servers');
const statusController = async (set) => {
	const { chatId, req, message } = set;
	try {

		if (message.split(' ').length === 1) {
			await axios.post(`${process.env.TELEGRAM_API}/sendMessage`, {
				chat_id: chatId,
				text: servers
			});
			return;
		}

		if (message.split(' ').length !== 2) {
			throw new BaseError('Used wrong.');
		}

		const [command, target] = message.split(' ');
		const serverNames = Object.keys(servers);

		if (!serverNames.find(server => server === target)) {
			await axios.post(`${process.env.TELEGRAM_API}/sendMessage`, {
				chat_id: chatId,
				text: `Bridge : ${bridge.status} - { Type:${bridge.TYPE}, version:${bridge.version} } ,
			ERP : ${erp.status} - { Type: ${bridge.data_provider}, version:${bridge.version} },
			Eshop : ${eshop.status}`,
			});
		}

		const { data: response } = await axios.post(`${servers[target]}/api/v1/status/check`, { secret: 'ThisIsAD3m0Imp0r7S3cr37' });

		const { bridge, erp, eshop } = response;

		await axios.post(`${process.env.TELEGRAM_API}/sendMessage`, {
			chat_id: chatId,
			text: `Bridge : ${bridge.status} - { Type: ${bridge.TYPE}, version: ${bridge.version} } ,\nERP : ${erp.status} - { Type: ${erp.data_provider}, version: ${eshop.version} },\nEshop : ${eshop.status}`,
		});
	} catch (err) {
		await axios.post(`${process.env.TELEGRAM_API}/sendMessage`, { chat_id: chatId, text: (`${err.message}`) });
	}
};

module.exports = statusController;
