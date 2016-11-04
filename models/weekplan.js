const mongoose = require('../libs/mongoose'),
	Schema = mongoose.Schema;

var schema = new Schema({
	date: {
		type: Date,
	},
	content: {
		type: String,
	},
});

exports.WeekPlan = mongoose.model('WeekPlan', schema);