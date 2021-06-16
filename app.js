var express = require('express')
var dotenv = require('dotenv')
dotenv.config()
var app = express()

var routes = require("./routes");
routes(app);

module.exports = app;