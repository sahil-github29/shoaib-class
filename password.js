function clicked(){
var user = document.getElementById("username");
var pass = document.getElementById("password");
var cruser = "shoaib";
//var rgex = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i";
var crpass = "12345";

// if (user.value == cruser) {
if (/^s[a-zA-Z]/.test(user)) {


    if(pass.value == crpass)
    {
      alert("you are logged in as " + user.value);
    }
    else {
      alert("incrrt username or password");
    }
}
else {
      alert("incrrt username or password");
  }
}
