let sum = [];
/*var numbers = [1,2,3,4]
let iterator = numbers.values()
let next = iterator.next()

while(!next.done){
    sum.push(next.value)
}*/

var a = ['w', 'y', 'k', 'o', 'p'];
var iterator = a.values();
while(!iterator.next().done) {
    sum.push(iterator.next().value)
}
module.exports = sum
