var mongoose = require('mongoose');
var userSchema = require('../schemas/userschema');

var userModel = mongoose.model('user', userSchema);

module.exports = userModel;
