const BaseError = require('../utils/errors/BaseError');
const BotRouter = require('../libs/middlewares/BotRouter');
const endProccessController = require('../controllers/endProcessController');
const idController = require('../controllers/idController');
const statusController = require('../controllers/statusController');

const Routes = (set) => {
	try {
		const router = new BotRouter(set);

		router.use(/^endprocess/gm, endProccessController);
		router.use(/^myid/gm, idController);
		router.use(/^status/gm, statusController);


	} catch (err) {
		throw new BaseError(err.message);
	}
};

module.exports = Routes;
