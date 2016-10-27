function checkMail() {
var id=/([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.(A-Za-z)/g;


  var regID= document.getElementById("userName").value;
  var password=document.getElementById("password").value;
  if (userName=="" ||password=="") {
    alert(console.log("hello"));

    return false;
  }
  else {
    return true;
  }

}
