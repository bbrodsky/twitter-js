var express = require( 'express' );
const volleyball = require('volleyball');
var nunjucks = require('nunjucks');
var routes = require('./routes/');
var socketio = require('socket.io');


var app = new express(); // creates an instance of an express application
app.use(volleyball);

nunjucks.configure('views');
app.set('view engine', 'html');
app.engine('html', nunjucks.render);


var server = app.listen(3000, function(){
  console.log("server listening!");
});
var io = socketio.listen(server);
app.use('/', routes(io));
