var express = require('express');
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var routes = require('./controllers/burgerController.js')

//express set up to run on port 3000
var app = express();
var PORT = 3000;

//set public as the static folder
app.use(express.static(process.cwd() + "/public"));

//set up bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//set up methodOverride to use specified ?_method='METHOD' instead of POST
app.use(methodOverride("_method"));

//set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//any routes are resolved by the controller
app.use('/', routes);

//start server
app.listen(PORT);