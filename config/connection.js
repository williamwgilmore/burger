var mysql = require('mysql');

var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'Jimmyisthebest88',
	database: 'burgers_db'
});

module.exports = connection;