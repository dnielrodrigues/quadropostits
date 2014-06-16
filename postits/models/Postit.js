module.exports = function(app) {

	var db = require('../lib/db_connect')();
	var Schema = require('mongoose').Schema;

	var postit = Schema({
		tipo: {
			type: String,
			required: true
		},
		conteudo: {
			type: String,
			required: true
		}
	});

	return db.model('postit', postit);

};