const removeUndefined = (obj) => {
	const keys = Object.keys(obj);
	keys.forEach((key) => {

		if (!obj[key]) {
			delete obj[key];
		} else if (obj[key] === 'undefined') {
			delete obj[key];
		}
	});
	return obj;
};

module.exports = removeUndefined;
