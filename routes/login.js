var express = require('express');
var router = express.Router();
var loginHandler = require('../handler/login');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Welcome To Leave Management System Portal' });
});

router.post('/', function(req, res,next){
  loginHandler.handle(req, res);
});

module.exports = router;
