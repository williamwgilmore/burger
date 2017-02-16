var connection = require('../config/connection.js');

function printQuestionMarks(num){
	var arr = [];

	for (var i=0; i<num; i++){
		arr.push('?');
	};

	return arr.toString();
};

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
	showAll: function(tableInput, cb){
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(err, result){
			if (err) throw err;

			cb(result);
		});
	},

	create: function(tableInput, cols, vals, cb){
		var queryString = 'INSERT INTO ' + tableInput;
		queryString += ' (' + cols.toString();
		queryString += ') VALUES (';
		queryString += printQuestionMarks(vals.length);
		queryString += ') ';

		console.log(queryString);

		connection.query(queryString, vals, function(err, result){
			if (err) throw err;

			cb(result);
		});
	},

	update: function(tableInput, objColVals, condition, cb){
		var queryString = 'UPDATE ' + tableInput;

		queryString += ' SET ' + objToSql(objColVals);
		queryString += ' WHERE ' + condition;

		console.log(queryString);
		connection.query(queryString, function(err, result){
			if (err) throw err;

			cb(result);
		})
	}
};

module.exports = orm;