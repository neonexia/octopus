var mqtt = require('mqtt')

exports = module.exports = {}

exports.connect = function(server, clientid) {
    var options = {
      host: "localhost",
      clientId: clientid
    };

    mqttClient = mqtt.connect(options);
    mqttClient.on('connect', function () {
      console.log("connected to mqtt server");
    });
    return mqttClient;
}
