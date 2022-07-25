var express = require('express');
const app = require('../app');
var router = express.Router();
var moment=require('moment');
const { type } = require('express/lib/response');

/* GET home page. */
router.get('/', function(req, res, next) {
  /*res.render('taller', { title: 'Area Taller' ,isTaller:true });*/
  var conocido=Boolean(req.session.usuario);
  res.render('taller', { title: 'Area Taller' ,
  isTaller:true, 
  conocido:conocido,
  usuario:req.session.usuario,
  password:req.session.passwd,
  seccionActiva:'taller'
 });

});

router.use(function(req,res,next){
  if(!req.session.vistas){
    req.session.vistas={};
  }
  if(!req.session.vistas[req.originalUrl]){
    req.session.vistas[req.originalUrl]=1;
  }else{
    req.session.vistas[req.originalUrl]++;
  }
  console.log(req.session.vistas);
  next();
})



router.post('/',function(req,res){
  if(req.body.usuario){
    req.session.usuario=req.body.usuario
  }
  if(req.body.passwd){
    req.session.passwd=req.body.passwd
  }

  req.requestTime = Date.now();
  moment.locale('es');
  ultimoAcceso=moment().format('MMMM Do YYYY, h:mm a');
  hora=moment().format('h');
  ampm=moment().format('a');
  if(ampm=='am'){
    if(hora<6){saludo='Buenas noches';}
    else{saludo='Buenos dias';}
  }else{
    if(hora<8){saludo='Buenas tardes';}
    else if(hora==12){
      saludo='Buenos dias';
    }else{saludo='Buenas noches';}
  }

  passWd=req.body.passwd;
  passWd=passWd.toString();
  semiPasswd=passWd.slice(-parseInt(passWd.length/2));
  semiPasswd=semiPasswd.padStart(passWd.length,"*");
  if(req.session.vistas[req.originalUrl]==1){
    cantidadVeces='vez';
  }else{
    cantidadVeces='veces';
  }


  res.render('usuario',{
    nombre:'taller',
    saludo:saludo,
    vistas:req.session.vistas[req.originalUrl],
    usuario:req.body.usuario,
    semiPasswd:semiPasswd,
    tiempo:ultimoAcceso,
    cantidadVeces:cantidadVeces
  });
})



module.exports = router;
