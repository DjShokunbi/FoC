module.exports = (function(models) {

	function eventsByLocation(request, response, next) {
		response.send("Hello!");
		next();
	};

	return {
		eventsByLocation: eventsByLocation
	}
});
