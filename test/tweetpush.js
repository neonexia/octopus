var publisher = require ('./mqttclient.js')
var Twitter = require('node-tweet-stream')

t = new Twitter({
  consumer_key: 'ZZJZKOqIzduAFd4LXmN2g9xpp',
    consumer_secret: 'HnTUfthky9xgRyRWTxfmjIBszwbNBDqESyTeaYqOXRyRGZeba4',
    token: '23627422-S1DmMF5Ge2oSnMt8Lzvz2v9vvM8diFHzgSIVywWXr',
    token_secret: 'aANFRflgZYFMBJou1uiY0dXpqEYgDLCDdlq4ZRQ0jGV84'
})

t.on('tweet', function (tweet) {
  console.log('publish tweet to mqtt')
  var subject = "bigdata"
  if (tweet["text"].toLowerCase().indexOf("hadoop") > -1)
    subject = "hadoop"
  else {
    if (tweet["text"].toLowerCase().indexOf("iot") > -1)
      subject = "iot"
  }
  publisher.publish(subject, tweet["text"] + ":" + tweet["user"]["location"])
})

t.on('error', function (err) {
  console.log('Oh no')
})

for (subject=2; subject<process.argv.length; subject++)
  t.track(process.argv[subject])

// t.track('bigdata')
// t.track('hadoop')
// t.track('hdfs')
