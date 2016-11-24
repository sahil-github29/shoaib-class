var http = require('http')
//var useLet = require('./let/let.js');
//var emp = require('class.js');
var abst = require('./abst.js');


http.createServer(function(req, res) {
  res.write("We are using ES6" + "\n" + abst.doWork())
  // use of let
  //console.log(useLet("test"))

  res.end()
}).listen(8080)
console.log('listening on localhost:8080');
