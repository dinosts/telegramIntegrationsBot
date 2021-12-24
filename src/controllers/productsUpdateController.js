
const axios = require('axios');
const { BaseError } = require('../utils');
const servers = require('../config/servers');
const states = require('../config/states');
const beautify = require('json-beautify');

const productsUpdateController = async (set) => {
	const { chatId, req, message } = set;
	try {

		if (!message.split(' ').length === 4) {
			throw new BaseError('used products update wrong.');
		}

		const [command, target, timeStart, timeEnd, state] = message.split(' ');

		if (!(timeStart.length === 19 && timeEnd.length === 19)) {
			throw new BaseError('dates wrongly set');
		}

		if (!states.find(st => state.toLowerCase() === st.toLowerCase())) {
			throw new BaseError('state wrongly set');
		}

		const serverNames = Object.keys(servers);

		if (!serverNames.find((server) => server === target)) {
			throw new BaseError('server not found');
		}

		const { data: response } = await axios.post(
			`${servers[target].url}/api/v1/products/update`, {
			secret: servers[target].pass,
			timeStart,
			timeEnd,
			namespace: 'products',
			method: 'update',
			state,
			xpagination: 1,
			xpagesize: 500,
		}
			, {
				timeout: 0,
			}
		);

		const { bridge, erp, eshop } = response;

		await axios.post(`${process.env.TELEGRAM_API}/sendMessage`, {
			chat_id: chatId,
			text: `triggered! :\n${beautify(response.IMPORT?.LOOP_DATA, null, 2, 80)}`,
		});
	} catch (err) {
		await axios.post(`${process.env.TELEGRAM_API}/sendMessage`, {
			chat_id: chatId,
			text: `${err.message}`,
		});
	}
};
module.exports = productsUpdateController;
