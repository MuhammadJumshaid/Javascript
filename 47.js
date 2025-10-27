// 20251027 

// Hoisting 

// Calling a function before its declaration is called hoisting , or using(accessing) a varible  before its creation 


// In function hoisting occure only with declaraton , not with the function expression and arrorw function 

// console.log(Greeting()) // undefined 

// function Greeting(){
//     console.log("Hi, Jimi") // Hi, JImi
// }



// Function expression 

// console.log(Greeting()) //  Cannot access 'Greeting' before initialization

// var Greeting =  function(){
//     console.log("Hi, Jimi")
// }
// console.log(Greeting()) //  Cannot access 'Greeting' before initialization

// let Greeting =  function(){
//     console.log("Hi, Jimi")
// }
// console.log(Greeting()) //  Cannot access 'Greeting' before initialization

// let Greeting =  ()=>{
//     console.log("Hi, Jimi")
// }


//  Accessing Variable

// console.log(Greeting) // undefined
// var Greeting = "How Are you"

console.log(Greeting) //  Cannot access 'Greeting' before initialization
let Greeting = "How Are you"
