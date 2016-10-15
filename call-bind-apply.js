/*var teacher = {salary:20000}
var principle = {salary:30000}

/*obj.add = function(secondNum) {
  return this['firstNum'] =  this['firstNum'] + secondNum
}

var tax1 = [10, 3, 14, 5]
function getSalary(tax){
  console.log(this.salary + tax[0]+ tax[1]+tax[2])
}

/*getSalary.call(teacher, tax) // function.call(obj, args)
getSalary.call(principle, 20) // function.call(obj, args)


getSalary.call(teacher, tax1) // function.call(obj, array)
getSalary.call(principle, tax1) // function.call(obj, array)




//console.log(obj.getSalary());
*/

//var multiply

//function mul(a) {
  //return multiply(a,a);

//}
//console.log(mul(4));
var obj ={num:2};
var addToThis = function (a) {
  return this.num +a;

};


//console.log(addToThis.call(obj,3));



//var obj ={num:2};
     var addToThis = function (a,b,c) {
     return this.num +a + b + c;

};


//console.log(addToThis.call(obj,1,2,3));





// Example of apply
var obj2 = {num:5};
var arr = [1, 2, 3];
console.log(addToThis.apply(obj,arr));
console.log(addToThis.apply(obj2,arr));

// making sample function for using bind()
var obj ={num:2};
var addToThis = function (a,b,c) {
    return this.num + a + b + c;
};
var arr = [1, 2, 3];
var bound = addToThis.bind(obj);
console.dir(bound);
console.log(bound(1,2,3));

// making sample function for call() method
function kill(a) {
    return this.name + "is not going to " + a +"you";
}
var Dog1={
    name : 'Boooboo',
    legs : 4
}

var Dog2={
    name:'choooboo',
    legs: 4
}
console.log(kill.call(Dog1,"bite"));

function kill(a,b) {
    return this.name + "is not going to " +  a + "/" + b +  "you";
}

var Dog1={
  name:'Boooboo',
  legs: 4
}

var Dog2={
  name:'choooboo',
  legs: 4
}
console.log(kill.apply(Dog1,["bite","shoo"]));

console.log("-----------------------\n");
console.log('you are done');
setTimeout(function() {
  console.log("he is done");
}, 1000)
console.log("I am done");
