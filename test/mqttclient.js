var mqtt    = require('mqtt')
var mqttClient  = mqtt.connect('mqtt://localhost');

mqttClient.on('connect', function () {
  console.log("connected to mqtt server")
});

module.exports = mqttClient
