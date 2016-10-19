/*var myBooks = ["Great Exception", "PHP", "JAVA"]

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

veg.workout = function(){
  console.log("gym");
}
console.log(veg.action("Biryani"));
console.log(veg.workout());



//function
function sum(a){
  console.log(a*a*a   +  " cube");
}
sum(3)





var box={
 height:12,vol:249,
 book:["red","blue","black","yello"],
  mohan:function(a,b){
    //console.log("this is cube=" + a);


  }

  //red:44
}
box.mohan("mohan",rahul)
console.log(box);






var veg = {
  //action : function(what){
      //console.log(what + " Eating");
  //},
//hello:75875585,
  addWorkout : function(workout, timing ,date){
    this[workout] = timing,date;
  }
}
veg.addWorkout("cycling", "7:am","23aug")
veg.addWorkout("jogging", "6:am","24aug")

console.log(veg);
/*

var man={
  mangoMan:function (a,b) {

this[a]=b;
  }
}
man.mangoMan("rahul","mohan")
console.log(man);

************************************************************************************
var man={

  rahul:4,  mohan:4,
  class1:["javed","rakesh","sahil","mtt"]
}
//console.log(man.class1);
man.class1.push("shoaib");
console.log(man.class1);
*****************************************************************************************

var Pbox={
  height:3,
  width:44,
  vol:546,
  destination1:"mango",

  [# of  steps]:2,

  for (var i = 1; i < Pbox["# of  steps"]; i++) {
    console.log(Pbox["destination" + i ]);
  }
}



function addCritter(container, name, type, species, length) {

    container[name] = {
        type: type,
        species: species,
        length: length
    };

}

var aquarium = {
    Nemo: {
        type: "fish",
        species: "clownfish",
        length: 3.4
    },
    Dory: {
        type: "fish",
        species: "clownfish",
        length: 5.7
    },
    Marlin: {
        type: "fish",
        species: "clownfish",
        length: 4.4
    },
    peach: {
        type: "fish",
        species: "starfish",
        length: 3.4
    },
    addCritter: function(name, type, species, length) {
        this[name] = {
            type: type,
            species: species,
            length: length
        };
    }
}

aquarium.addCritter("Bubbles", "fish", "yellow tong", 5.6);
//console.log(aquarium);

/*prototype.countAll = function(letter) {
  var letterCount = 0;
  for(var i =0; i < this.length; i++) {
    if(this.charAt(i).toUpperCase() == letter.toUpperCase()) {
      letterCount++;
    }
  }
  return letterCount
};

var str = "This is my first great experience in JavaScript";
var fruit = "this is what i liked";
console.log(str.countAll("z"))
console.log(fruit.countAll("d"))

function Shoe(shoeSize, shoeColor, forGender, constructStyle) {
  this.size = shoeSize;
  this.color = shoeColor;
  this.gender = forGender;
  this.construction = constructStyle;
}
Shoe.prototype = {
  putOn : function() {
    alert('Shoes on dood!');
  },
  takeOff : function() {
    alert("oh, what's that smell");
  }
}

var beachShoe = new Shoe(10, "blue", "women", "flipflop")
beachShoe.straps = 2;
//console.log(beachShoe);
//console.log(Shoe.prototype.putOn.valueOf())
*/
var fruits = JSON.parse(`[{"apple" : "100", "mango" : "50"}, {"apple" : "10", "mango" : "50"}]`);

console.log("<table>");
for (fruit in fruits) {

    ("<tr><td>" + fruits[fruit]["apple"] + "</td></tr>");
}
console.log("</table>");
