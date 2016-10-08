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

console.log(myBox.BooksBox.mylanguage.TypesofBooks.completeReference);
