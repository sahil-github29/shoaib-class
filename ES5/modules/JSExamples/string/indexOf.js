 /*
 This method returns the index within the calling String object of the first
 occurrence of the specified value, starting the search at fromIndex or -1 if the
 value is not found.
 syntax:string.indexOf(searchValue[, fromIndex]) */

   var str1 = "This is string one";
   var index = str1.indexOf( "is" );
   document.write("indexOf found string :" + index );
   document.write("<br/>");
   var index = str1.indexOf( "one" );
   document.write("indexOf  found string :" + index );
