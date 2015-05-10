var subscriber = require ('./mqttclient.js')

subscriber.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  //subscriber.end();
});

subscriber.subscribe(process.argv[2])
