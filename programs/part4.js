function CountE() {
  var phrase = prompt("which phrase would you like to ex");
  if (typeof(phrase) != "string") {
    alert("that's not valid entry!");

  }
  else {
    var eCount = 0;
    for (var index = 0; index < phrase.length; index++) {


      if (phrase.charAt(index) == 'e'|| phrase.charAt(index) == 'E') {
        eCount++;
console.log("eCount " + phrase.charAt(index) );
      }

    }
alert("There are" + eCount + "E's in\"" + phrase +"\".");
return true;

  }


}
CountE()
