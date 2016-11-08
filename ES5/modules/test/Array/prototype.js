/*
The prototype property allows you to add properties and methods to any object
 (Number, Boolean, String, Date, etc.).
 syntex
 object.prototype.name = value
*/


 function book(title,author,store) {
      this.title = title;
      this.store = store;
      this.author = author;
 }
   var myBook = new book("Perl", "Mohtashim","kyala");
   book.prototype.name = null; //add new properties help of prototype
   book.prototype.price = null;
   myBook.price = 100;
   myBook.name = 'shohaib';

   document.write("Book title is : " + myBook.title + "<br>");
   document.write("Book store is : " + myBook.store + "<br>");
   document.write("Book author is : " + myBook.author + "<br>");
   document.write("Book price is : " + myBook.price + "<br>");
   document.write("Book name is : " + myBook.name + "<br>");
