const express = require('express');
const server = express.Router();
const db = require('../model/firebase')

server.get('/', async (req, res) => {
	try {
		const recruitData = await db.ref('/recruit').once('value');
		res.status(200).json(recruitData);
	} catch(err) {
		res.status(500).send('파이어베이스 에러가 발생했습니다')
	}
})

module.exports = server;