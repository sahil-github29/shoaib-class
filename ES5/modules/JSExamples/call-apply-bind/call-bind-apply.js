

var multiply
function mul(a) {
  return multiply(a,a);

}
console.log(mul(4));
var obj ={num:2};
var addToThis = function (a) {
  return this.num +a;

};


console.log(addToThis.call(obj,3));



var obj ={num:2};
     var addToThis = function (a,b,c) {
     return this.num +a + b + c;

};


console.log(addToThis.call(obj,1,2,3));









var obj2 ={num:5};
var arr =[1,2,3];
 console.log(addToThis.apply(obj,arr));
 console.log(addToThis.apply(obj2,arr));








 var obj ={num:2};
      var addToThis = function (a,b,c) {
      return this.num +a + b + c;

 };
 var arr =[1,2,3];
 var bound =addToThis.bind(obj);


 console.dir(bound);
console.log(bound(1,2,3));












function kill(a) {
  return this.name + "is not going to " + a +"you";

}

var Dog1={
  name:'Boooboo',
  legs: 4,

}



var Dog2={
  name:'choooboo',
  legs: 4,

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



console.log(kill.apply(Dog1,["bite","shoo"]);





function upDateScore() {
     this.score++;

}


var obj ={

    gameName :"cckt",
    score:0
};
    console.log(upDateScore.call(obj,6));
