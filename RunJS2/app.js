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
const login = require('./routes/login');
const logout = require('./routes/logout');
const register= require('./routes/register');
const userList = require('./routes/userlist');
const user = require('./routes/user');
const privacy = require('./routes/privacy');
const updateSession = require('./routes/session');

const MONGO_CONNECTION = 'mongodb://localhost/runjs2';

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
  cookie: { maxAge: 1000*60*60 },
  store: new mongoStore({
         url: MONGO_CONNECTION,
         collection: 'sessions'
     })
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',updateSession, index);
app.use('/dashboard', updateSession, dashboard);
app.use('/tryonline', updateSession, tryOnline);
app.use('/admin/userList', updateSession, userList);
app.use('/user/register', updateSession, register);
app.use('/user/login', updateSession, login);
app.use('/user/logout', logout);
app.use('/user', updateSession, user)
app.use('/privacy', updateSession, privacy);

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
