// 20250926 

// Data Types 

// 1. Primitive dataTypes(string, number , boolean, null, undefined, BigInt, Symbol)
// 2.Non-Primitive ()


// typeof Operator 

/*
let firstName = "Jumshaid";
console.log(typeof firstName); // string

let age = 23 ;
console.log(typeof age);  // number

let myAge = 24 ;
console.log(typeof 24); // number

*/

 
// Conver number to String 

// number + "" >>>> string

// let age = 22;
// console.log(typeof (age + ""));  // string 

// or same as above 

// let age = 22 

// age = age + "";

// console.log(typeof (age) );  // string
// // or 
// console.log(typeof age );  // string


// other Method 

// let age = 12 ;
// console.log(typeof age); // number

// age = String(age)

// console.log(typeof age);  // string



// Convert string to NUmber

// Trick >> add plus sighn(+) before a string this will convert a string into number 

// "" >> string 
// +"">> number 


// let myname = "Jimi";
// console.log(typeof myname); // string

// myname = +"Jimi";
// console.log(typeof myname);  // number


let myName = "jimi";
console.log(typeof myName); //string


let numberName = Number(myName) 
console.log(typeof numberName); // number