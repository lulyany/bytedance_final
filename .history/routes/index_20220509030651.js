var express = require('express');
var router = express.Router();
var bootstrap=require("bootstrap")

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Online Node Chat' });
});

module.exports = router;