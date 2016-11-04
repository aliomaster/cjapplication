const mongoose = require('../libs/mongoose'),
	Schema = mongoose.Schema;

var schema = new Schema({
	content: {
		type: String,
	},
	startDate: {
		type: Date,
	},
	finishDate: {
		type: Date,
	},
});

exports.FlySpot = mongoose.model('FlySpot', schema);