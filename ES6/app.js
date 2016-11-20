var http = require('http')
var useLet = require('./let/let.js');
var classObj = require('./emp')
var arrowFunc = require('./arrow.js')
var marks = require('./forEachWithArrow.js')
var asynchArrow = require('./arrowAsynch.js')
var iterator = require('./iterator')
var iterator2 = require('./iterator2')

http.createServer(function(req, res) {

/*  res.write("We are using ES6" + "\n"  + classObj.emp.hands() + "\n" + classObj.emp.work()
+ "\n" + "I am a " + classObj.gears + "\n" + classObj.emp.getSalary()
)*/
  // use of let
 // console.log(useLet("test"))

//res.write(" " + arrowFunc("Sahil"))
//res.write(" " + marks)
res.write(" " + iterator2)

  res.end()
}).listen(8080)
console.log('listening on localhost:8080');
