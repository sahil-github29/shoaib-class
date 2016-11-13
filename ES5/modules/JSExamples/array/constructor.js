/*Javascript array constructor property returns a reference to the array function
that created the instance's prototype.
*/
   var arr = new Array( 10, 20, 30 );//Object
   var arr = [ 10, 20, 30 ];//simple
   document.write("arr.constructor is:" + arr.constructor);//print in html page
   document.write("arr is:  " +  arr);//print Array in html page
   console.log(arr);//print Array
   console.log(arr.constructor);//print returns a reference
