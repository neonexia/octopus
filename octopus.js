// for now mqtt only. but really this should be a wrapper that listens
// on multiple protocols for events
var serverManager = require("./protocols/mqtt/server.js").init()

serverManager.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
serverManager.on('published', function(packet, client) {
  clientid = "unknown";
  if(client != undefined)
    clientid = client.id;
  console.log('Published', "published packet by client: " + clientid);
});

// fired when a client disconnects
serverManager.on('clientDisconnected', function(client) {
  console.log('Client Disconnected:', client.id);
});

serverManager.on('ready', function() {
  console.log('Mosca server is up and running');
});
