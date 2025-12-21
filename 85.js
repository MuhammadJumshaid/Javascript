// 20251221 

// let numbers = [1,2,3]

// console.log(numbers) //[1, 2, 3] 
// to performs any operation on array (in this case numbers) when we write numbers and press . we see many methods in suggession , where these methods are coming from 
// >> these methods are coming from prototype
// But 
// eary we have learned that only functions has prototype
// yes , this is true
// interanally js create an array like (uses array constructor)

// const numbers = new Array(1,2,3)
// console.log(Array.prototype) // array
//  console.log(numbers) //[1, 2, 3] 


let numbers = [1,2,3]
console.log( Object.getPrototypeOf(numbers)) // array
console.log(numbers) //[1, 2, 3] 

function hello(){
    console.log("hello")
}

// prototype 
console.log(hello.prototype) // {} >> object 
// console.log(Array.prototype) // array
//  in case of array her we have array  , array are objects 

console.log(hello.prototype) // {} >> object 
// you can also change its prottype 

hello.prototype = [];
console.log(hello.prototype) // [] >> array 
// now we will use it like array

hello.prototype.push('1')
console.log(hello.prototype) // ['1']