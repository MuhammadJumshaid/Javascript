// 20251017 

// Primitive type vs Reference Type 


// Primitive Type

// let num1 = 5;
// let num2 = num1;

// console.log("value of num1 ", num1);  //  5 
// console.log("value of num2 ", num2);  //  5

// num1++;
// console.log("value of num1 after increment", num1);
// console.log("value of num2 ", num2);

// Refrence Type(array)

let arr1 = ["item1", "item2"]
let arr2 = arr1;

console.log("value of arr1", arr1); // ['item1', 'item2']
console.log("value of arr2", arr2); // ['item1', 'item2']

arr1.push("item3");

console.log("value of arr1 after pushing new element", arr1); // ['item1', 'item2', 'item3']
console.log("value of arr2 after pushing new element", arr2); // ['item1', 'item2', 'item3']


// Concept 

// How Primitive data types stored in memory
// There is a thing in computer known as stack, where our data is stored , when we create a varaible it takes its place in the stack , like var num1 and num2 takes its own places , and the value stored there, primitive types are stored in stack , primitive type does not occupy more space

// How Reference data types stored in memory
// There is also a thing in computer known as heap, when we create an array this will not store in the stack , will be stored in the heap , but its reference( a pointer >> which contian address of the array) will be stred in the stack , now when we say let arr2 = arr1 ; the address of arr1 will be stored in arr2 , as arr1 and arr2 has the same address so both will print the same array