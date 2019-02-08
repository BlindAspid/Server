var Hapi = require('hapi');

var server = new Hapi.Server();

server: conection({
	host: 'localhost',
	port: 8080
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: function (request, reply) {
    reply("Hello, World!");
  }
});

server.start();