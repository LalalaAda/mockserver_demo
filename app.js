var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

app.use(express.static(path.join(__dirname, 'htdocs')));
app.use(express.static(path.join(__dirname, 'source/template')));

app.use('/', indexRouter);
app.use('/act', apiRouter);

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});