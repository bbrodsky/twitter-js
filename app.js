var express = require( 'express' );
const volleyball = require('volleyball')



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
  res.send('Hello world!');
});

app.listen(3000, function(){
  console.log("server listening!");
});
