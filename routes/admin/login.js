var express=require('express');
var router=express.Router();
var usuariosModel=require('./../../models/usuariosModel');
var moment=require('moment');

router.get('/',function(req,res,next){
    res.render('admin/login',{
        layout:'admin/layout',
        title: 'Area Admin'
    });
});

router.get('/logout', function(req,res,next){
    req.session.destroy();
    res.render('admin/login',{
        layout:'admin/layout',
        finSesion:true
    });
});


router.post('/', async(req,res,next)=>{
    
    try {
        var usuario=req.body.usuario;
        var password=req.body.passwd;
        var data=await usuariosModel.getUserByUsernameAndPassword(usuario,password);
        
        if(data!=undefined){
            req.session.id_usuario=data.id;
            req.session.nombre=data.usuario;

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
            

            req.session.id_usuario=data.id;
            req.session.nombre=data.usuario;
            req.session.saludo=saludo;
            req.session.tiempo=ultimoAcceso;            

            res.redirect('/admin/novedades');
        } else {
            
            res.render('admin/login',{
                layout:'./admin/layout',
                error:true
            });
        }
    } catch (error){
        console.log(error);
    }
})

module.exports=router;