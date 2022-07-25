var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();
var nodemailer=require('nodemailer');
var moment=require('moment');
var contactoModel=require('../models/contactoModel');

var hoy= new Date();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto', { title: 'Contacto', isContacto:true });
});

router.post('/',async(req,res,next)=>{

  var nombre=req.body.nombre;
  var email=req.body.email;
  var mensaje=req.body.mensaje;
  req.requestTime = Date.now();
  moment.locale('es');
  ultimoAcceso=moment().format('MMMM Do YYYY, h:mm a');
  req.body.fecha=ultimoAcceso;

  var obj={
    to:'ivanhellwig@hotmail.com',
    subject:'Contacto pagina web',
    html: "<div style='background-color:yellow;'><h1 style='color:red;'>Mensaje para Concesionaria Silver</h1> <br>Se contacto <p style='color:red;'>"+nombre+"</p> desde la pagina de la concesionaria Silver.<br> Su correo de contacto es: <p style='color:red;'>"+email+"</p>.<br> El mensaje que dejo es el siguiente: <p style='color:red;'>"+mensaje+"</p>.<br> Fecha de envio: "+hoy+"</div>"
  }

  var transport=nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth:{
      user:process.env.SMTP_USER,
      pass:process.env.SMTP_PASS
    }
  });

  var info=await transport.sendMail(obj);
  var contacto=await contactoModel.insertContacto(req.body);

  res.render('contacto',{
    message:'Mensaje enviado correctamente'
  });

});





module.exports = router;
