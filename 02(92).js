// 20251229


// Hhoistig

console.log(this) // Window
console.log(window)  // Window
console.log(myFun) // whole function
console.log(fullName) //  undefined

function myFun(){
    return  "Hi, Jimi, How are you"
}

var firstName = "Muhammad"
var lastName = "Jumshaid"
var fullName = firstName + " " + lastName ;

console.log(fullName) // Muhammad Jumshaid

// How js works 

//  1.Compilation (1.Early error checking , 2. Determining scope of variables (Global Scope))
//  2.Code Execution (1.Global Execution Context(i. Creation phase >> when gec is created some things will be availbe in the memory so we call it (global memory), ii. Code execution phase)) 

// when we create Global execution context, this is added in the stack memory

// // new thing to learn >> js stores variable in the object like key value pairs {}, called environment record or global environment record



// when all the code execute from the global exeutiong this will be poped(deleted) from the memory

// Current execution context is on the top in the stack 




// Hoistig
// before code execution the varables and functions are stored in the global execution context (global memory) , and the value of vaiables is set to undefined
// when we enter in the global execution context our variables are created in the memory

console.log(this) // Window
console.log(window)  // Window
console.log(myFun) // whole function
console.log(fullName) //  undefined

function myFun(){
    return  "Hi, Jimi, How are you"
}

var firstName = "Muhammad"
var lastName = "Jumshaid"
var fullName = firstName + " " + lastName ;

console.log(fullName) // Muhammad Jumshaid