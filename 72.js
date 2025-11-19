// 20251119  

// this keyword 


// console.log(this) // window object 

// console.log(window) // window object 

// console.log(this == window) // true


// function myFun(){
//     console.log("hellow world")
// }
// myFun()  // hellow world
// // or 

// window.myFun() // hellow world

// myFun will be created in the window object 
// so as we have read in the previous filethe value  this is the object that is calling the function so this is equal to window object


// some time this will create problem so we use use strict mode 




// function myFun(){
//     console.log(this)
// }

// console.log(myFun()) // window object 

function myFun(){
    "use strict"
    console.log(this)
}

console.log(myFun()) // undefined