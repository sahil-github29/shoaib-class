


/*var arr = [1,2,3,4,5];
var ar = [];
for (var i = arr.length - 1; i >= 0; i--)
//console.log(arr[i]);
     ar += arr[i];
console.log(ar);*/
 //return ar;

//}
//console.log(reverseArry["hello","what","is","arry"]);
//console.log(ar);


var username = prompt("enter no");
for (var i = 0; i <=username; i++)
{
    if ( i%3 == 0) {
        console.log("multipl of 3 ="+i);
    }
    else if (i%5 == 0){
        console.log("multipl of 5=" +i);
    }
}

/*
//Array




function addPassanger ( name, list ) {
    if (list.length == 0 ) {
    list.push(name);

}
    else {
for (var i = 0; i < list.length; i++) {
     if (list[i] == definend){
     list[i] = name;
     return list;
}
    else if (i == list.length-1) {
    list.push(name);
    return list;
}
}
}
}
console.log(addPassanger( "mohan" , 5 ));



 //String

var a = 5;


for (var b = 0; b < 10; b++) {


if (a <= b) { // true
  console.log(a + ' is less than ' + b);
} else if (a > b) {
  console.log(a + ' is greater than ' + b);
} else {
  console.log(a + ' and ' + b + ' are equal.');
}
}



var s1 = '2 + 2';             // string primitive
var s2 = new String("2 + 2"); //  String object
console.log(eval(s1));        // returns the number 4
console.log(eval(s2));        //  problem


var s = 'foo';
var obj = new String(s);

console.log(typeof s); //  "string"
console.log(typeof obj);//problem
console.log(eval(s2.valueOf()));//what is the use  of valueOf

//var num = 15;
//console.log(String.replace(num, /5/, '2'));//problem




//Array
var fruits = ["Apple", "Banana"];

//out put of array length 2
var first = fruits[0];


var last = fruits[fruits.length - 1];
//
console.log(last);


//loop
fruits.forEach(function (item, index, array) {
  console.log(item, index);
});

//add
var newLength = fruits.push("Orange");
var newLength = fruits.push("Mango");
var newLength = fruits.push("Garpes");
var newLength = fruits.push("lichi");
console.log(fruits);


//remove
var last = fruits.pop("Mango");
console.log(fruits); //Mango is not remove the "pop "function removeonly last one

//remove fornt Array

var first = fruits.shift();
console.log(fruits);


//index of array
var ind = fruits.indexOf("Mango");
console.log(ind);


//obj prop


var promise = {
      "var" : 'text',
      "array": [1, 2, 3, 4],
      "_id": "56fce507fe4b3824494ebefa",
      "job_purpose": "test justification",
      "job_details": "VM requested  in bng_ccp_pod1",
      "requestedFor": "vinodkm",
      "owner": "vinodkm",
      "date_updated": "2016-03-31T08:51:19.584Z",
      "date_created": "2016-03-31T08:51:19.584Z",

};

console.log(promise["array"]);
console.log(Object.keys(fruits));// new

//genric methods





//most imp

var str = "Hello world!"
var patt = /Hello/g;
var result = patt.test(str);
    console.log(result);

var str = "Visit    Shohaib's home!";
var n = str.search(/home/g);
     console.log(n);



*/


  /*   var reverseArry =  prompt("enter no");
     var ar = [];
     var index = arr.indexOf(5);
for (var i =index; i >= 0; i--)
    //console.log(a);
     ar += arr[i];
     console.log(ar);*/
      //return ar;
