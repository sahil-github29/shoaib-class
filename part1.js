/*console.log("This is our first JavaScript");

console.log("This" == "This");

var fruit = "apple is great to have";

console.log(typeof fruit)*/

var gotName = 45;
while(gotName == 45) {
  var username = prompt("what's yout name");
  if(confirm("Are you sure your name is " + username + "?")){
    alert("Sup " + username);
    gotName = false; 
  }
}
