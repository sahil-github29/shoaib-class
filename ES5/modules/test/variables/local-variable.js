/*
Variables declared within a JavaScript function, become LOCAL to the function.

Local variables have local scope: They can only be accessed within the function.*/


  var myname = "initial";
  function c(){
      alert(myname);
      var myname = "changed";//local var
      alert(myname);
  }
     c();
