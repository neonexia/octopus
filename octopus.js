var mosca = require('mosca');

var settings = {
  port: 1883
};var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
// server.on('published', function(packet, client) {
//   console.log('Published', packet.payload.toString());
// });

// fired when a client disconnects
server.on('clientDisconnected', function(client) {
console.log('Client Disconnected:', client.id);
});

server.on('ready', function() {
  console.log('Mosca server is up and running');
});
