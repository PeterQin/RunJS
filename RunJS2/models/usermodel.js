var mongoose = require('mongoose');
var userSchema = require('../schemas/userschema');

var userModel = mongoose.model('users', userSchema);

module.exports = userModel;
