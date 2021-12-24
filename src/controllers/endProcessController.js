const axios = require('axios');
const endProccessController = async (set) => {

	const { chatId,message,res} = set;

	await axios.post(`${process.env.TELEGRAM_API}/sendMessage`, {chat_id: chatId, text: message});

};

module.exports = endProccessController;
