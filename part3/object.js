var myBooks = ["Great Exception", "PHP", "JAVA"]

var myBox = {
  height : 8, width: 12, length : 15,
  packed : true,
  "box content"  : ["Glasses", " Shades"],
  Books : myBooks,
  mylatops : {
    language : {
      mylanguage : ["javascript", "html"],
      mylatops : {
        apple : "has",
        Lenovo : "Lenovo is a good laptop"
      }
    }
  }
}
console.log(myBox.mylatops.language.mylanguage);
//console.log(myBox['length']);
//console.log(myBox.length);
//console.log(myBox.packed);
//console.log(myBox.content[1]);
//console.log(myBox.Books[0]);
myBox.Books[0] = "MongoDB";
myBox.shipped = "success";

console.log(myBox);
