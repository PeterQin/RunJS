var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var SALT_FACTOR = 10;
var userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique:true,
		lowercase: true
	},
	userName: String,
	password: String,
	meta: {
		createdTime: {
			type: Date,
			default: Date.now()
		},
		updatedTime: {
			type: Date,
			default: Date.now()
		},
	}
});

userSchema.pre('save', function(next){
	var user = this;

	if (user.isNew) {
		user.meta.createdTime = Date.now();
		user.meta.updatedTime = Date.now();
	}
	else{
		user.meta.updatedTime = Date.now();
	}

	bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
		if (err) {
			return next(err);
		};
	    bcrypt.hash(user.password, salt, function(err, hash) {
	    	if (err) {
	    		return next(err);
	    	};

	        user.password = hash; 
	        next();
	    });
	});
});

userSchema.methods.comparePassword = function(aPassword, aCallback){
	var user = this;
	bcrypt.compare(aPassword, user.password, function(err, aIsMatched) {
	    if (err) {
	    	return aCallback(err);
	    };

	    aCallback(null, aIsMatched);
	});
}

userSchema.statics = {
	fetch: function(aCallback){
		return this.find({}).sort('meta.updatedTime').exec(aCallback);
	},
	findById: function(aID, aCallback){
		return this.findOne({_id: aID}).exec(aCallback);
	},
	findByEmail: function(aEmail, aCallback){
		var aEmailInLowerCase = aEmail.toLowerCase();
		return this.findOne({email: aEmailInLowerCase}).exec(aCallback);
	},
};

module.exports = userSchema;