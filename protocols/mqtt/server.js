var mosca = require('mosca');

exports = module.exports = {}

//exports start here
exports.init = function(settings) {
  if(settings == undefined){
    settings = {
      port: 1883
    };
  }
  return new mosca.Server(settings);
}
