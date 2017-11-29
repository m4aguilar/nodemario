var express = require('express');
var app = express();
var paht = require('path');
var ejs = require('ejs');

app.set('port', (process.env.PORT || 8080));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index.html');
});

app.listen(app.get('port'));
