// Array
var fruits = ['apple', 'orange', 'kiwi'];
var numbers = [10, 20, 2, 3, 0, 500];


// Adding new elements to the end of
// the array:
fruits[3] = 'banana';
fruits[4] = 'pear';
console.log(fruits);

// new elements on the end
fruits.push('grape');
fruits.push('raspberry');
console.log(fruits);
//Add elements to START of an array
fruits.unshift('raspberry');
fruits.unshift('blackberry');
console.log(fruits);

//using for loop
/*
function show_array(fruits) {
    for(var i=0; i<fruits.length; i++) {
        console.log(fruits[i]);

    }
}

//var fruits = ['apple', 'orange', 'banana'];

show_array(fruits);



function show_array(fruits) {

    var text = ' ';

    for(var i in fruits) {
        text += fruits[ i];
        text += ' ';
    }
     console.log(text);
}
show_array(fruits);


//

// Sort arrays in ascending alphabetical order
var numbers = [10, 20, 2, 3, 0, 500];
console.log(fruits.sort());
console.log(numbers.sort());
show_array(fruits);
show_array(numbers);



// Sort in reverse alphabetical order.
fruits.sort(function(a, b) {
    if(a > b) {
        return -1;
    }
    else if(a < b) {
        return 1;
    }
    else {
        return 0;
    }
});

// Sort in ascending numerical order.
numbers.sort(function(a, b) {
    if(a > b) {
        return 1;
    }
    else if(a < b) {
        return -1;
    }
    else {
        return 0;
    }
});

console.log(fruits);
console.log(numbers);

show_array(fruits);
show_array(numbers);



//using pop and shift
fruits.pop();//last element is remove
fruits.shift();// 1st element is remove
console.log(fruits);
*/
