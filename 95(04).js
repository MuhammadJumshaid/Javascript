// 20251230 

// before code execution variables used in the code are created in the memory this is known as hoisting

// Let and const Variable execution 
// TDZ  (Tempral Dead Zone)

// in case of let the variables in the global memory (creation phase) are set to uninitialized , on the other hand in case of let they are set to undefined 

// Q.Can let can const be hoisted like var 
// Ans : Yes , let and const variables are added in the memory before code exuction like var 
// before the exection of first line of code the varialbe made by let and const are present in the memory but are uninitialized 

// console.log(firstName) ;  // Uncaught ReferenceError: Cannot access 'firstName' before initialization
// let firstName = "Muhammad"; 
// console.log(firstName)



// if our first line of code is 
// let firstName = "Muhammad"; 
// the value of firstName in the memory is till uninitialized , 
// when this lines executes it Value will be Muhammad


// console.log(firstName)



// if in the code i have only this line 


// console.log(firstName) // 95(04).js:28 Uncaught ReferenceError: firstName is not defined

console.log(typeof firstName) // undefined
    

// differences b/w the above two errors 

// Uncaught ReferenceError: Cannot access 'firstName' before initialization
// >> this error will come when whe have varable in the memory but it is not initialized 

// firstName is not defined 
// this error come when we not have variablle in the memory



// TDZ 
// the time period b/w a variable becomes initaialized from uninitialize state is known as TDZ(Tempral Dead Zone)

// var (uninitailized)---------------------- 