var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usersRouter = require('./routes/users');
const produitRouter = require('./routes/produits');
const commanderRouter = require('./routes/commande');
const categoriesRouter = require('./routes/categories');
const produit_commandeRouter = require('./routes/produit_commande');
const panierRouter=require('./routes/panier')
const declarationRouter = require('./routes/declaration');
const rendez_vous_Router=require('./routes/rendez-vous');
const bodyParser = require('body-parser');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/images', express.static('images'));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {//hediya nhotouha bch naatiw acces lel front eli howa localhost 3000 bch yestaamel get,post,put,delete 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
});
app.use('/commande', commanderRouter);
app.use('/produit', produitRouter);
app.use('/users', usersRouter);
app.use('/categories',categoriesRouter);
app.use("/ass",produit_commandeRouter)
app.use("/panier",panierRouter)
app.use('/declaration',declarationRouter)
app.use('/rendez-vous',rendez_vous_Router);

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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>console.log(`Votre app est disponible sur localhost: 5000 !`));

module.exports = app;
