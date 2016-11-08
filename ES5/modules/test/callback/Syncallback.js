/*
  Synchronous : Callback function
*/
function callback(val) {
  console.log(val);
}

var fruits = ['banana', 'apple', 'orange']

fruits.forEach(callback);
console.log('done');
