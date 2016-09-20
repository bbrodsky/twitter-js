module.exports = function (io) {
  var express = require('express');
  var router = express.Router();
  var tweetBank = require('../tweetBank');
  var bodyParser = require('body-parser');

  var urlencodedParser = bodyParser.urlencoded({ extended: false});

  router.use(express.static('public'));

  io.sockets.emit('newTweet',
    tweetBank.latestTweet()
  );

  router.get('/', function(req, res) {
    var tweets = tweetBank.list();
    res.render('index', { tweets: tweets, showForm: true });
  });

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find({ name: name });
    res.render('index', { tweets: list, showForm: true });
  });

  router.get('/tweets/:id', function(req, res) {
    var id = req.params.id;
    var list = tweetBank.find({ id: id });
    res.render('index', { tweets: list });
  });

  router.post('/tweets', urlencodedParser, function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
  });
  return router;
};

// module.exports = router;
