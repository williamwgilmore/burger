var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js')

router.get('/', function(req, res){
	burger.showAll(function(data){
		var toHandleBars = {
			burger: data
		};
		console.log(toHandleBars);
		res.render('index', toHandleBars);
	});
});

router.post('/', function(req,res){
	console.log(req.body)
	burger.create(
		['burger_name'],
		[req.body.name],
		function(){
			res.redirect('/');
		});
});

router.put('/:id', function(req, res){
	var condition = 'id = ' + req.params.id;

	console.log('condition:' + condition);

	burger.update({
    devoured: true
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;