var express=require('express');
var router=express.Router();
var novedadesModel=require('../../models/novedadesModel');
var contactoModel=require('../../models/contactoModel');


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

router.get('/agregar',(req,res,next)=>{
  res.render('admin/agregar',{
    layout:'admin/layout'
  })
})

router.get('/',async function(req,res,next){
    
    //var novedades=await novedadesModel.getNovedades();

    var novedades
    var novedadActive=true
    var mensajesActive=false
    
    console.log(novedadActive)
    console.log(mensajesActive)
    if(req.query.tabSeleccionado==='novedades'){
      novedadActive=true
      mensajesActive=false
    }

    if(req.query.tabSeleccionado==='mensajes'){
      novedadActive=false
      mensajesActive=true
    }
    

    if (req.query.q===undefined){
      novedades=await novedadesModel.getNovedades();
    }else{
      novedades=await novedadesModel.buscarNovedades(req.query.q);      
      
    }

    var mensajes

    if (req.query.q1===undefined){
      mensajes=await contactoModel.getContacto();
    }else{
      mensajes=await contactoModel.buscarContacto(req.query.q1);
    }

    if(req.session.vistas[req.originalUrl]==1){
        cantidadVeces='vez';
    }else{
        cantidadVeces='veces';
    }
    
    nombre=req.session.nombre;
    nombre=nombre.charAt(0).toUpperCase() + nombre.slice(1);

    res.render('admin/novedades',{
        layout:'admin/layout',
        title: 'Administracion',
        usuario:nombre,
        saludo:req.session.saludo,
        vistas:req.session.vistas[req.originalUrl],
        tiempo:req.session.tiempo,
        cantidadVeces:cantidadVeces,
        novedades,
        mensajes,
        novedadActive,
        mensajesActive,
        is_search:req.query.q!=undefined,
        q:req.query.q,      
        is_search1:req.query.q1!=undefined,
        q1:req.query.q1  
    });
});

router.get('/eliminar/:id',async(req,res,next)=>{
  var id=req.params.id;
  await novedadesModel.deleteNovedadById(id);
  res.redirect('/admin/novedades')
});

router.get('/eliminarMensaje/:id',async(req,res,next)=>{
  var id=req.params.id;    
  await contactoModel.deleteMensajeById(id);
  res.redirect('/admin/novedades');
});


router.post('/agregar', async (req,res,next)=>{
  try{
    if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){  
         
      if(req.body.boton != null && req.body.boton =="1"){       
        req.body.boton=true
      }else{        
        req.body.boton=false
      }
      await novedadesModel.insertNovedad(req.body);
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar',{
        layout:'admin/layout',
        error:true,
        message:'Todos los campos son requeridos'
      })
    }
  } catch(error){
    console.log(error)
    res.render('admin/agregar', {
      layout:'admin/layout',
      error:true,
      message:'Novedad no fue cargada'
    });
  }
});

router.get('/modificar/:id',async (req,res,next)=>{
  let id=req.params.id;
  let novedad= await novedadesModel.getNovedadById(id);
  res.render('admin/modificar',{
    layout:'admin/layout',
    novedad
  });
});

router.post('/modificar',async(req,res,next)=>{
  try{
    if(req.body.boton != null && req.body.boton =="1"){       
      req.body.boton=true
    }else{        
      req.body.boton=false
    }
    let obj={
      titulo:req.body.titulo,
      subtitulo:req.body.subtitulo,
      cuerpo:req.body.cuerpo,
      boton:req.body.boton
    }

    await novedadesModel.modificarNovedadById(obj,req.body.id);
    res.redirect('/admin/novedades');
  }catch(error){
    console.log(error)
    res.render('admin/modificar',{
      layout:'admin/layout',
      error:true,
      message:'No se modifico novedad'
    })
  }
})


module.exports=router;