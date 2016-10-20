var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	id: String,
	userName: String,
	password: String,
	alias: String,
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
	fetch: function(callback){
		return this.find({}).sort('meta.updatedTime').exec(callback);
	},
	findById: function(id, callback){
		return this.findOne({_id: id}).exec(callback);
	},
};

module.exports = userSchema;