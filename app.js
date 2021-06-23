var express = require('express')
var dotenv = require('dotenv')
dotenv.config()
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
var routes = require("./routes");

app.use(cors())
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json())
routes(app);
module.exports = app;