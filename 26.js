//  20251016 

// Arrays
// Intro to array



// Array (Reference datatype)
// Ordered(index) collection of items(of any type)
// WE can access any particular item in the array by its index number
// let fruits = ["Mango", "Banana", "Orange"]
// console.log(fruits);
// console.log(fruits[1]); // Banana

// let numbers = [3,6,8,9];
// console.log(numbers);
// console.log(numbers[3]); // 9


// let mixed = ["JUmshaid", 6, 8, , null, undefined, 12.6]
// console.log(mixed);
// console.log(mixed[3]); // undefined(empty space)



// Changing any elements in the array will change the orignal array

let fruits = ['Mango', "banana", 'orange', 'apple']
console.log(fruits);  //  ['Mango', 'banana', 'orange', 'apple']
fruits[0] = "Grapes"
console.log(fruits); //  ['Grapes', 'banana', 'orange', 'apple']


// Note >> in the javascript we say object to all the reference type , so Arrays are objects

console.log(typeof fruits); //  object

let obj = {}  // object literal
let arr = []
console.log(typeof obj); // object
console.log(typeof arr); // object

// There are many types of objects in the js , so how can we know that this is array?

// Array.isArray(fruits)
console.log(Array.isArray(fruits));  // true
console.log(Array.isArray(obj));  // false



