const dotenv = require('dotenv');
dotenv.config()
const firebase = require('firebase');
const config = {
	apiKey: process.env.apiKey,
	authDomain: process.env.authDomain,
	databaseURL: process.env.databaseURL,
	projectId: process.env.projectId,
	storageBucket: process.env.storageBucket,
	messagingSenderId: process.env.messagingSenderId,
	appId: process.env.appId
}
const database = firebase.initializeApp(config).database();

module.exports = database;