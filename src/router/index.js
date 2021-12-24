'use strict';

const { BaseError } = require('../utils');
const BotRouter = require('../libs/middlewares/BotRouter');
const notifyController = require('../controllers/notifyController');
const idController = require('../controllers/idController');
const statusController = require('../controllers/statusController');
const productsUpdateController = require('../controllers/productsUpdateController');


const routes = (set) => {
	try {
		const router = new BotRouter(set);

		router.use(/^notify/gm, notifyController);
		router.use(/^myid/gm, idController);
		router.use(/^status/gm, statusController);
		router.use(/^productsUpdate/gm, productsUpdateController);


	} catch (err) {
		throw new BaseError(err.message);
	}
};

module.exports = routes;
