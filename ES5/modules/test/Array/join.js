/*
avascript array join() method joins all the elements of an array into a string.
syntax: array.join(separator);
*/

//var arr = new Array("First","Second","Third");
var arr = ["First","Second","Third"];
var str = arr.join();
document.write("str : " + str );
var str = arr.join(": ");
document.write("<br />str : " + str );
var str = arr.join(" + ");
document.write("<br />str : " + str );
console.log(typeof str);
console.log(typeof arr);
