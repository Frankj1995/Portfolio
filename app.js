const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home');
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started succesfully");
});
