var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: 'Express' });
});

// router.get('/details', function(req, res, next) {
//   res.render('home/details', { title: 'Express' });
// });

module.exports = router;
