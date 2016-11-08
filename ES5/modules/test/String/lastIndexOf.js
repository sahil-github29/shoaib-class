 /*
 This method returns the index within the calling String object of the last
 occurrence of the specified value, starting the search at fromIndex or -1 if the
 value is not found
 syntax :
 string.lastIndexOf(searchValue[, fromIndex]) */

    var str1 = "This is string one and again string";
    var index = str1.lastIndexOf( "string" );
    document.write("lastIndexOf found string :" + index );
    document.write("<br/>");
    var index = str1.lastIndexOf( " one" );
    document.write(index);
