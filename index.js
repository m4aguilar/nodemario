// index.js
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080))

app.get('/', function(req, res){
  res.json({ mensaje: 'Madre mía que guapa!!! <3 <3 <3 Rubí'});
});

app.listen(app.get('port'));
