// 20251230

// Function Execuion Context


// How javascript works 

// 1. Compilation phase
// 2. Code Execution phase


// 1.Compilation phase 
// i)  early Error cheking
// ii) Determining the scope of variable(which variable belong to which scope (global or funcion))

// 2.Code Execution Phase 
// 2(1). Execution Context (Stroed in the stack(memory)(Call stack))
// 2(1)(i) Memory Creation phase
// 2(2)(ii) Code Execution phase 


// 2(1)(i) Memory Creation phase

// 2(1)(i)(i) . Global Exection Context 
// 2(1)(i)(ii). Function Execution Context


// 2(1)(i)(ii). Function Execution Context
// 2(1)(i)(ii)(i). Local(Functional) memeory Creation phase (Local)
// 2(1)(i)(ii)(ii). Local Code exection phase 







// console.log("hello world")

// let firstName = "Muhammad";
// let lastName = "Jumshaid";

// const myFun = function(){
//     let var1 = "First Variable";
//     let var2 = "Second Variable";
//     console.log(var1);
//     console.log(var2)
// }   


let a = "gg"
console.log(a)

function getFullName(firstName, lastName){
console.log(arguments);
let myVar = "var inside function"
console.log(myVar)
const fullName = firstName + " " + lastName ; 
return fullName
}

const personName = getFullName("Muhammad" ,"Jumshaid")
console.log(personName)