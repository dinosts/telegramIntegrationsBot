const { PASS } = process.env;
const BaseError = require('../../utils/errors/BaseError');
const htaccess = require('../../config/htaccess');

const authMessage = (req) => {

	const { ids } = htaccess;

	if (!ids.find(id =>
		id == req.body.message.from.id
	)) {
		throw new BaseError('Not authorized, please pm the adminstrator.');
	}
};

module.exports = authMessage;
