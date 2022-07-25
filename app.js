var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv=require('dotenv');
var session=require('express-session');

var indexRouter = require('./routes/index');

var nosotrosRouter = require('./routes/nosotros');
var modelosRouter = require('./routes/modelos');
var tallerRouter = require('./routes/taller');
var contactoRouter = require('./routes/contacto');
var usuarioRouter = require('./routes/usuario');
var loginRouter=require('./routes/admin/login');
var adminRouter=require('./routes/admin/novedades');


var app = express();

//dotenv reader
dotenv.config();

//mysql config

var pool=require('./models/bd');
const async = require('hbs/lib/async');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname+'/public/images/'));
app.use(express.static(__dirname+'/public/javascripts/'));
app.use(express.static(__dirname+'/public/stylesheets/'));


app.use(session({
  secret:'asdfsdfsdfsdfASDFASDF1231231231',
  resave:false,
  saveUninitialized:true
}));


secured = async(req,res,next)=>{
  try{
    console.log(req.session.id_usuario);
    if(req.session.id_usuario){
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch(error) {
    console.log(error);
  }
}

app.get('/salir',function(req,res){
  req.session.destroy();  
  res.redirect('/taller');
})




app.use('/', indexRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/modelos', modelosRouter);
app.use('/taller', tallerRouter);
app.use('/contacto', contactoRouter);
app.use('/usuario', usuarioRouter);
app.use('/admin/login',loginRouter);
app.use('/admin/novedades', secured, adminRouter);






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





module.exports = app;
