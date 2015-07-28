var restify = require('restify');
var models = require('./models/models')(process.env.MONGOLAB_URI);
var eventRoutes = require('./routes/events')(models);

var server = restify.createServer({
	name: 'API Template',
	version: '1.0.0'
});

// Parse query strings.
server.use(restify.queryParser());
// Pase the body.
server.use(restify.bodyParser());

server.get("/", function(request, response, next) {
response.send("Hello");
next();
})

server.get('/events', eventRoutes.eventsByLocation);

var port = (process.env.PORT || 8080);
server.listen(port, function() {
	console.log((new Date()) + " Server is listening on port: " + port + ".");
});

