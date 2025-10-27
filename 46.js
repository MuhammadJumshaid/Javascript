// 20251027

// Arrow Function



// Function Expression
// const sum = function(){
//     return 2+4
// }
// let result = sum();
// console.log(result) // 6


// const sum = ()=>{
//     return 2+6
// }

// let result = sum();
// console.log(result) // 8



// Function Decalration 

// function isEven(number){
//   return  number%2 == 0
// }

// console.log(isEven(3)) // False 
// console.log(isEven(2)) // True 

// Function Expression 
// const isEven =  function(number){
//   return  number%2 == 0
// }

// console.log(isEven(3)) // False 
// console.log(isEven(2)) // True 


// Arrow function 
// const isEven =  (number)=>{
//   return  number%2 == 0
// }

// console.log(isEven(3)) // False 
// console.log(isEven(2)) // True 

// or 

// Arrow function 
// When our function is taking single(only one) parameter , you can skip curly braces
// const isEven =  number=> { 
//     return 
//     number%2 == 0
// }
// console.log(isEven(3)) // undefined 
// console.log(isEven(2)) // undefined 

// const isEven =  number=> { 
//     return  number%2 == 0
// }
// console.log(isEven(3)) // false 
// console.log(isEven(2)) // true 


const isEven =  number=>    number%2 == 0

console.log(isEven(3)) // false 
console.log(isEven(2)) // true 