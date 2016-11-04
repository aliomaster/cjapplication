const mongoose = require('../libs/mongoose'),
	Schema = mongoose.Schema;

var schema = new Schema({
	name: {
		type: String,
	},
	tasks: {
		type: Array,
	},
	startDate: {
		type: Date,
	},
	finishDate: {
		type: Date,
	},
});

exports.Area = mongoose.model('Area', schema);