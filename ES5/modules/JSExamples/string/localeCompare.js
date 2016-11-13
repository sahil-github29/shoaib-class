 /*
 This method returns a number indicating whether a reference string comes
 before or after or is the same as the given string in sorted order.
 Syntax
 string.localeCompare(param) */

   var str1 = "This is beautiful sting";
   var index = str1.localeCompare( "This is beautiful sting" );
   document.write( "localeCompare 1:" + index + "<br/>" );
   var index = str1.localeCompare( "This" );
   document.write( "localeCompare 2:" + index + "<br/>" );
   var index = str1.localeCompare( "XYZ" );
   document.write( "localeCompare 3:" + index + "<br/>"  );
