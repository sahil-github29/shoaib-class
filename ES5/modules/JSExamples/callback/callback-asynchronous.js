  /*
  Asynchronous : Callback function
  */



function asynchronous(data, callback) {
  // error
  var err = (data.indexOf("Mango") > -1) ? 'No banana allowed' : null

  setTimeout(function(){
      callback(err, data)
  }, 1000)
}
var fruits = ['banana', 'apple', 'orange']
var mycallbackData;
// this is the common callback pattern
asynchronous(fruits, function(err, data){
  if(err === null) {
    console.log(data);
    mycallbackData = data; // you cannot use data outside of this callback
  } else {
    console.log(err);
  }
})
console.log('i am done');
// console.log(mycallbackData); // undefined


// asynchronous inside loop
for(var k=0; k<3; k++) {
    (function(k) {
        setTimeout(function() {
            console.log(k);
        },1000);
    })(k);
}

  /*
  *********************************************************************************
  */




    /*


    /*
    Asynchronous : Callback function

    var arr = new Array( 10, 20, 30 ,"hello" );
    //var arr = [10, 20, 30, "hello" ];
    (function () {
      setTimeout(function() {
        document.write("arr.length is:" + arr.length);
        console.log(arr.length);
      },3000);
  })(arr.length);


  console.log('i am done');
  // console.log(mycallbackData); // undefined


  // asynchronous inside loop
  for(var k=0; k<3; k++) {
      (function(k) {
          setTimeout(function() {
            document.write( k );

              console.log(k);
          },2000);
      })(k);
  }






    */
