var myBooks = ["Great Exception", "PHP", "JAVA"]

var myBox = {
  RedBox:["height =8cm", "width= 12cm", "length=15cm"],
  height : 8, width: 12, length : 15,
  packed : true,
  content  : ["Glasses", " Shades"],

BooksBox:{
  mylanguage : {C:["basic","loops","string","functions"],
  javaaa:["javaBasic","javaLoops"],
  JavaScript:["JavaScriptBasic","basicLoop","GIT"],
  csharp:["basicC#","OOPS","functionsC#","SQL"],

  TypesofBooks : {
    ProgrammingLanguage : ["c","java","JavaScript","c#"],
    completeReference: "Programming best book ever"

      }
    }
  }
}

//for (var i = 0; i < myBox.BooksBox.mylanguage.csharp.length; i++) {

// console.log(myBox.BooksBox.mylanguage.cs[i]);
//}
//console.log(myBox.height);
//console.log(myBox['length']);
//console.log(myBox.length);
//console.log(myBox.packed);
//console.log(myBox.content[1]);
//console.log(myBox.Books[0]);
//myBox.Books[0] = "MongoDB";
//myBox.shipped = "success";

/*var fruits = ["apple" , "banana" ,  "orange"]

//console.log(myBox.BooksBox.mylanguage.TypesofBooks.completeReference);
fruits.pop()
fruits.unshift("MyFruits")
fruits.push("Mango")
fruits.shift()
console.log(fruits);
*/

//var fruits = ["apple1" , "apple2" ,  "appl3"]
//console.log(fruits.apple2);
/*
var fruits = {
  myFruits : "mango",
  yourFruit : "banana"
}
console.log(fruits);
fruits.hisFruit = "Apple"
console.log(fruits);

// deleting property of an object
delete fruits.myFruits;
console.log(fruits);*/

/*
var veg = {myVeg : "patato"}
console.log(veg.myVeg);
var pens = ["great", "not great"]
console.log(pens[1]);

var addAccount = function(operation) {
  console.log(operation + "done..!");
}
addAccount("leg")
*/

/*
var eatFruit = function(whatFruit) {
  console.log('I am having ' + whatFruit);
  //return 'I am having ' + whatFruit
}
eatFruit("Mango");
*/

var veg = {
  action : function(what){
      console.log(what + " Eating");
  },
  addWorkout : function(workout, timing){
    this[workout] = timing;
  }
}
veg.addWorkout("cycling", "7:am")
veg.addWorkout("jogging", "6:am")

console.log(veg);

/*veg.workout = function(){
  console.log("gym");
}
console.log(veg.action("Biryani"));
console.log(veg.workout());
*/
