var express = require( 'express' );
const volleyball = require('volleyball');
var nunjucks = require('nunjucks');
var routes = require('./routes/');


var app = new express(); // creates an instance of an express application
app.use(volleyball);
app.use('/', routes);
nunjucks.configure('views');
app.set('view engine', 'html');
app.engine('html', nunjucks.render);


app.listen(3000, function(){
  console.log("server listening!");
});
