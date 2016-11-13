/*
Javascript array concat() method returns a new array comprised of this array
 joined with two or more arrays.
syntex
array.concat(value1, value2, ..., valueN);
 */

   var first = [ 1, "Mohd" ];
   var middle = [ "shoaib" ];
   var last = [ "khan" ];
   var alphaNumeric = first.concat(middle,last);//concat() method
   document.write("alphaNumeric : " + alphaNumeric );
   console.log("alphaNumeric : " + alphaNumeric );
