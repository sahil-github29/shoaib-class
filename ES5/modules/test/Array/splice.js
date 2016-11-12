/*
Javascript array splice() method changes the content of an array, adding new
 elements while removing old elements.
syntax:  array.splice(index, howMany, [element1][, ..., elementN]);
index :index at which to start changing the array
howMany: An integer indicating the number of old array elements to
remove. If howMany is 0, no elements are removed.*/


   var arr = ["orange", "mango", "banana", "sugar", "tea"];
   var removed = null;
   arr.splice(2, 0, "applt", "hello");
   document.write("After adding 1: " + arr );
   document.write("<br />removed is: " + removed);
   removed = arr.splice(2, 2);
   document.write("<br />After adding 1: " + arr );
   document.write("<br />removed is: " + removed);
