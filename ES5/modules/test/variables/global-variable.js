/*
Global Variables: A global variable has global scope which means
it can be defined anywhere in your JavaScript code

*/

var myVar = "global";
document.write(myVar); // Declare a global variable
function checkscope( ) {
var myVar = "local"; // Declare a local variable

};
document.write(myVar);
