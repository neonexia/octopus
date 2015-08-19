//mqtt server
exports = module.exports = {}

exports.initAllServers = function() {
  var mqttServer = require("./protocols/mqtt/server.js").init()
  // client connected event
  mqttServer.on('clientConnected', function(client) {
      console.log('mqtt client connected', client.id);
  });
  // fired when a message is received
  mqttServer.on('published', function(packet, client) {
    clientid = "unknown";
    if(client != undefined)
      clientid = client.id;
    console.log('Published', "published packet by client: " + clientid);
  });
  // fired when a client disconnects
  mqttServer.on('clientDisconnected', function(client) {
    console.log('Client Disconnected:', client.id);
  });
  mqttServer.on('ready', function() {
    console.log('Mosca server is up and running');
  });

  // http and http-* bindings
  // websockets
}
