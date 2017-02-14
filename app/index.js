const hapi = require('hapi');

const server = new hapi.Server();
server.connection({ port: 3000 });

server.route([{
  method: 'GET',
  path: '/api/home',
  handler: function (request, reply) {
    reply({ message: 'Hello Balls' })
  }
}]);

server.start(() => {
  console.log('Me!!')
  console.log(`Server is listening at: ${server.info.uri}`)
})
