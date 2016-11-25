var http = require('http')
//var useLet = require('./let/let.js');
var em = require('./class.js');

http.createServer(function(req, res) {
  res.write("We are using ES6" + "\n" + em.chaekIdentity())
  // use of let
  //console.log(useLet("test"))

  res.end()
}).listen(8080)
console.log('listening on localhost:8080');
