const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

const index = require('./routes/index');
const dashboard = require('./routes/dashboard');
const tryOnline = require('./routes/tryonline');
const signin = require('./routes/signin');
const signout = require('./routes/signout');
const signup= require('./routes/signup');
const userList = require('./routes/userlist');
const user = require('./routes/user');
const privacy = require('./routes/privacy');
const updateSession = require('./routes/updateSession');

const MONGO_CONNECTION = 'mongodb://localhost/runjs2';
const HOUR_IN_MILLION_SECOND = 1000*60*60;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_CONNECTION);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'Analyser Live 1',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: HOUR_IN_MILLION_SECOND},
  store: new mongoStore({
         url: MONGO_CONNECTION,
         collection: 'sessions'
     })
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(updateSession);

app.use('/', index);
app.use('/dashboard', dashboard);
app.use('/tryonline', tryOnline);
app.use('/admin/userList', userList);

app.use('/user/signup', signup);
app.use('/user/signin', signin);
app.use('/user/signout', signout);
app.use('/user', user);

app.use('/privacy', privacy);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
