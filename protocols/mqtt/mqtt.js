var mosca = require('mosca');
var mqtt = require('mqtt')

exports = module.exports = {}

//exports start here
exports.initServer = function(settings) {
  if(settings == undefined){
    settings = {
      port: 1883
    };
  }
  return new mosca.Server(settings);
}

exports.initClient = function(server, clientid) {
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
