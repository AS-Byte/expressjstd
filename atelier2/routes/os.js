var express = require('express');
var router = express.Router();
var os = require ('os');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    "hostname": os.hostname() ,
    "type": os.type() ,
    "platforms": os.platform(),

  })
});

router.get('/cpus/:id/', function(req, res, next) {
  var ident = req.params.id;
  res.json({
    "CPU's": (os.cpus()[ident])
  })
});

router.get('/cpus', function(req, res, next) {
  res.json({
    "CPU's": os.cpus()
  })
});


module.exports = router;
