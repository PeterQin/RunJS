var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique:true
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
	if (this.isNew) {
		this.meta.createdTime = Date.now();
		this.meta.updatedTime = Date.now();
	}
	else{
		this.meta.updatedTime = Date.now();
	}

	next();
});

userSchema.statics = {
	fetch: function(aCallback){
		return this.find({}).sort('meta.updatedTime').exec(aCallback);
	},
	findById: function(aID, aCallback){
		return this.findOne({_id: aID}).exec(aCallback);
	},
	findByEmail: function(aEmail, aCallback){
		return this.findOne({email: aEmail}).exec(aCallback);
	},
};

module.exports = userSchema;