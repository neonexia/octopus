var octopusClient = require ('./octopusClient.js')

bridge = module.exports = {}
bridge.init = function(kafkaSettings, clientId) {
  kafkaClient.init(kafkaSettings)
  octopusSubscriber = octopusClient.connect("localhost", clientId)
  octopusSubscriber.subscribe("#")
  octopusSubscriber.on('message', function (topic, message) {
    // push to kafka
    console.log("pushing message to kafka\n" + message.toString());
  });
}

// kafka singleton
var kafkaClient = {}
kafkaClient.connected = false;
kafkaClient.init = function (kafkaSettings) {
  if(this.connected)
    return;
  console.log("connecting to kafka");
  connected = true;
}

bridge.init({}, process.argv[2]);
