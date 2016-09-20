var express = require( 'express' );
const volleyball = require('volleyball');
var nunjucks = require('nunjucks');



var app = new express(); // creates an instance of an express application
app.use(volleyball);
// app.use(function (req, res, next) {
//   console.log(req.method, req.url);
//   next();
// });

// app.use('/news', function(req,res,next){
//   console.log("Now here's the news...");
//   next();
// });

app.get('/', function(req, res, next) {
  // res.set('Content-Type', 'text/plain');
  var people = [{name: "Full"}, {name: "Stacker"}, {name: "son"}];
  res.render('index', {title: "Hall of Fame", people: people});
  
});

app.listen(3000, function(){
  console.log("server listening!");
});


var locals = {
	title: 'An Example',
	people: [
		{ name: 'Gandalf' },
		{ name: 'Frodo' },
		{ name: 'Hermione' }
	]
};
nunjucks.configure('views', { noCache: true });
nunjucks.render('index.html', locals, function (err, output) {
	console.log(output);
});

nunjucks.configure('views');
app.set('view engine', 'html');
app.engine('html', nunjucks.render);







































