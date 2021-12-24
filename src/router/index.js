'use strict';

const { BotRouter } = require('../libs/middlewares');
const {
  idController,
  notifyController,
  productsUpdateController,
  statusController,
} = require('../controllers');

const routes = (set) => {
  try {
    const router = new BotRouter(set);

    router.use(/^notify/gm, notifyController);
    router.use(/^myid/gm, idController);
    router.use(/^status/gm, statusController);
    router.use(/^productsUpdate/gm, productsUpdateController);
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = routes;
