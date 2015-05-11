var subscriber = require ('./../protocols/mqtt/client.js').connect("http://localhost", "sub1")

subscriber.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
    //subscriber.end();
});

subscriber.subscribe(process.argv[2])
