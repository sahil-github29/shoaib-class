 /*
 Javascript array pop() method removes the last element from an array and
 returns that element.
 syntax: Array.pop();
 Javascript array shift() method removes the first element from an array and
 returns that element.
 syntax :Array.shift();
  */

//var arr = new Array( "apple", "mango", "banana", "ornage", );
var arr = [ "apple", "mango", "banana", "ornage", ];
document.write(arr +"<br/>");
arr.shift();//first element
arr.pop();//last element
document.write(arr);
