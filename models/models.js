
module.exports = (function(databaseConnectionString) {
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var EventSchema = require('./event')(Schema);
	var SMSSchema = require('./sms')(Schema);
	
	function enableVirtualsOnSchema(schema) {
		schema.set('toJSON', {
			virtuals: true
		});
	}

	enableVirtualsOnSchema(EventSchema);
	enableVirtualsOnSchema(SMSSchema);

	var Event = mongoose.model('Event', EventSchema);
	var SMS = mongoose.model('SMS', SMSSchema);

	return {
		Event: Event,
		SMS: SMS
	}
});