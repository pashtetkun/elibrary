
var express = require('express');
var app = express();

//templates
app.set('views', './views')
//jade template engine
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', {title: 'Hey', message: 'Hello world!'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});