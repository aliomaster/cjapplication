const mongoose = require('../libs/mongoose'),
	Schema = mongoose.Schema;

var schema = new Schema({
	content: {
		type: String,
	},
	date: {
		type: Date,
	}
});

exports.CurrentPlan = mongoose.model('CurrentPlan', schema);