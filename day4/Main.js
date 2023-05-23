const Array = require('./Array');

let numbers = new Array();

numbers.push(8);
numbers.push(10);
numbers.push(11);
numbers.push(12);
numbers.push(13);

// console.log(numbers.toString());

numbers.whileEach((value, index, array) => {
    console.log(value, index, array, array[index]);
});