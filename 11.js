// 20250928 


// Undefined , Null, BigInt

// Undefined 

// when you create a variable and assign no value to it (declare), then its type will be undefined 
// this will be in case of var and let , in case of const we must have to assign value at declaration


// var firstName ; 
// console.log(typeof firstName);  // undefined 

// let lastName ;
// console.log(typeof lastName ); //  undefined

// const fullName ;

// console.log(fullName);  // error (Missing initializer in const declarationUnderstand this error)


// var firstName ; 
// console.log( firstName);  // undefined 


// let lastName ;
// console.log(typeof lastName ); //  undefined

// lastName = "Jumshaid";

// console.log(typeof lastName, lastName);  // string Jumshaid


// nUll >> matlab kuch bhi nhi

// var myName = null;
// console.log(myName); // null

// myName = "Jumshaid"

// console.log(myName, typeof myName); // Jumshaid string
// console.log(typeof null);  // object

// Note >> Q. typeof undefinded is undefined , number is number , string is string ... etc , So why the type of null is object ?
//  this is a bug in the javascript.its type should be null,not object. Object is a refecrence datatype , 




// BigInt

// In Javacript you can store a number upto a limit that is  9007199254740991 2^53 − 1

// let Number = 123 ;
// console.log( Number.MAX_SAFE_INTEGER); // undefined (don't know why? , it should be 9007199254740991 )
// If you want to store a number greater than this then you should use BigInt

// Its not necessary to make a larger number BigInt  , you can make a smaller number Bigint

// let myBigNumber = 123132132312321321321321321312324;
// console.log(myBigNumber , typeof myBigNumber); //1.2313213231232131e+32 'number'

// let myBigNumber = BigInt(123132132312321321321321321312324);
// console.log(myBigNumber, typeof myBigNumber); // 123132132312321314414250822729728n ,  'bigint'


// let mysmallBigNumber = BigInt(123);
// console.log(mysmallBigNumber , typeof mysmallBigNumber);  // 123n 'bigint'


// you can also create a BigInt number by writing n at the end of a number 


// let otherNumber = 2445n

// console.log(typeof otherNumber, otherNumber); //   bigint 2445n


// you can perform any obperation with BigINt

let myNumber = BigInt(12);
let sameMyBigNumber = 23n;
console.log(myNumber + sameMyBigNumber); // 35n

// You cannot mix bigInt with other data types 


// let myNumber = BigInt(12);
// let sameMyBigNumber = 23; 
// console.log(myNumber + sameMyBigNumber); // error  : Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions


