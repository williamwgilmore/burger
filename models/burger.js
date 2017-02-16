var orm = require('../config/orm.js');

var burger = {
	showAll: function(cb){
		orm.showAll('burgers', function(res){
			cb(res);
		});
	},

	create: function(cols, vals, cb){
		orm.create('burgers', cols, vals, function(res){
			cb(res);
		});
	},

	update: function(cols, vals, cb){
		orm.update('burgers', cols, vals, function(res){
			cb(res);
		});
	}

};

module.exports = burger;