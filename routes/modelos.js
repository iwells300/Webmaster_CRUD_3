var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('modelos', { title: 'Nuestros modelos', isModelos:true,  
  seccionActiva:'modelos'
  });
  
});


router.use(function(req,res,next){
  document.getElementById(req.body.seccionActiva).scrollIntoView(); 
  
  next();
})
module.exports = router;
