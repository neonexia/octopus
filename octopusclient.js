// hard code mqtt but will read from settings to find out the client to be used.
mqttClient = require('./protocols/mqtt/client.js')

exports = module.exports ={}

exports.connect = function(server, clientId) {
  return mqttClient.connect(server, clientId)
}
