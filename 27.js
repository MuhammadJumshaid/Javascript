// 20251017 

// Array Mehods 
// NOte >> Arrays are mutable, while strings are immutable
// Push , pop 
// Shift , unshift

// Push >> This will push new element at the last index of array , (Changed the orignal array)

// let fruits = ["Banana, Orange, Apple"]
// console.log(fruits); // "Banana, Orange, Apple"

// let fruits = ['Banana', 'Orange', 'Apple']
// console.log(fruits); // ['Banana', 'Orange', 'Apple']

// fruits.push("Grapes")
// console.log(fruits);  // ['Banana', 'Orange', 'Apple', 'Grapes']


// Pop >> This will remove the last index element (also return the last removed(poped) element)

// let fruits = ['Banana', 'Orange', 'Apple']
// console.log(fruits); // ['Banana', 'Orange', 'Apple']
// fruits.pop();
// console.log(fruits); //  ['Banana', 'Orange']




// let fruits = ['Banana', 'Orange', 'Apple']
// console.log(fruits); // ['Banana', 'Orange', 'Apple']
// console.log(fruits.pop()); // Apple
// console.log(fruits); //  ['Banana', 'Orange']

// let fruits = ['Banana', 'Orange', 'Apple']
// console.log(fruits); // ['Banana', 'Orange', 'Apple']
// let popedElement = fruits.pop();
// console.log("Poped element is :", popedElement); // Poped element is : Apple
// console.log(fruits); //  ['Banana', 'Orange']





// unshift >> This will add the new element at the first(zero) index

// let fruits = ["Banana", "Apple", "Orange"]
// fruits.unshift("Mango")
// fruits.unshift("Grapes") 
// console.log(fruits); // ['Grapes', 'Mango', 'Banana', 'Apple', 'Orange']


// shift >> This will remove the Element at the first index s

// let fruits = ["Banana", "Apple", "Orange"]
// fruits.shift( )
// console.log(fruits); //  ['Apple', 'Orange']

// let fruits = ["Banana", "Apple", "Orange"]
// let reovedElement = fruits.shift()
// console.log("Removed Element is ", reovedElement); // Removed Element is  Banana
// console.log(fruits); 



// Note >> push and pop are fast as compared to shift and unshift . Why?
// ans >> push  and pop just add and remove element at the last index , but shift and unshift will change the index by shifting and unshifting each index of array