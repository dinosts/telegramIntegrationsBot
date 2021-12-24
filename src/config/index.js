'use strict';

module.exports = {
	htaccess: {
		ids: (process.env.users).split(','),
	},
	servers:{
		[process.env.SERVER1]: { url: process.env.SERVER1URL, pass: process.env.SERVER1PASS },
		[process.env.SERVER2]: { url: process.env.SERVER2URL, pass: process.env.SERVER2PASS },
		[process.env.SERVER3]: { url: process.env.SERVER3URL, pass: process.env.SERVER3PASS },
		[process.env.SERVER4]: { url: process.env.SERVER4URL, pass: process.env.SERVER4PASS },
		[process.env.SERVER5]: { url: process.env.SERVER5URL, pass: process.env.SERVER5PASS },
		[process.env.SERVER6]: { url: process.env.SERVER6URL, pass: process.env.SERVER6PASS },
		[process.env.SERVER7]: { url: process.env.SERVER7URL, pass: process.env.SERVER7PASS },
		[process.env.SERVER8]: { url: process.env.SERVER8URL, pass: process.env.SERVER8PASS },
	},
	states: ['YES', 'NO'],
};

