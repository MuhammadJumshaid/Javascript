// 20251019 

// How to Clone Array

// let arr1 = ["item1", "item2"]
// let arr2 = ["item1", "item2"]

// console.log(arr1==arr2); // false


// let arr1 = ["item1", "item2"]
// let arr2 = arr1;

// console.log(arr1==arr2); // true


// IN the above second example there is only one array , when we assign arr1 to the arr2 variable only the new pointer is generated which will have the same address of array  that arr1 refering

// Cloning 

// slice(0) >> this method clone array and gives a new array, we pass the starting index number from where we have to clone array to the end


// let arr1 = ["item1", "item2"]

// let arr2 = arr1.slice(0)

// console.log(arr2);
// console.log(arr1==arr2); 


// Ohter method to clone array

// let arr1 = ["item1", "item2"]

// let arr2 = [].concat(arr1)
// console.log(arr2);


// Other New Method (Spread Operator)

// let arr1 = ["item1", "item2"]

// let arr2 = [...arr1]
// console.log(arr2);


// In the above three method to clone array slice method is fast , but mostly people used spread operator

// Task >> copy all elements of array 1 into array 2 also add extra elements in arr2

// let arr1 = ["item1", "item2"]

// let arr2 = [...arr1, "item2", "item2"]
// console.log(arr2);


// let arr1 = ["item1", "item2"]

// let arr2 = arr1.slice(0).concat(["item2", "item4"])
// console.log(arr2);


// let arr1 = ["item1", "item2"]

// let arr2 = arr1.concat(["item3"])
// console.log(arr2);


// let arr1 = ["item1", "item2"]

// let arr2 = [].concat(arr1, ["item2", "item4"])
// console.log(arr2);


let arr1 = ["item1", "item2"]
let oneMoreArr = ["item1", "item2"]

let arr2 = [...arr1, ...oneMoreArr]
console.log(arr2);
