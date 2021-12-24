const BaseError = require('../../utils/errors/BaseError');

const modifyText = (text) => {
	try {
		text = text.replace('/', '');
		return {
			message: text
		};
	} catch (err) {
		throw new BaseError('Could not modify message');
	}
};

module.exports = modifyText;
