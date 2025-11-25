//20251125

// prototype


// function hello(){
//     console.log("Hi, How are you!")
// }

// hello()  // Hi, How are you!


// Functions are combination of functions and objects

// you can treat functions as functions but you can alos treat funtions as object

// javascript functions ===> function + object


// in js function has a propery name (find the name of function)

// console.log(hello.name)  // hellos

// this is behaving like object

// you can add you own properties in function

// hello.myOwnProperty = "My name is Muhammad Jumshaid"
// console.log(hello.myOwnProperty)  // My name is Muhammad Jumshaid

// name property -----> tell function name 

// same as function provides more useful properties 
// like call mehthod, bind method , apply method

// the thing we are about to learn to day is 

// functions gives us a free space (mean empty object {})
// this object is called prototype

// hello.prototype 
// console.log(hello.prototype)  // {}

// this is given with a functions , if we have to add key value pairs for a functios we can add in it

// Note >> only functions provides this prototype property

// lets prove it 




// function hello(){
//     console.log("Hi, How are you!")
// }

// if(hello.prototype){
//     console.log('prototype is presenet ')
// }
// else{
//     console.log('prototype is not present')
// }


// // result >> prototype is presenet 

// const myObj = {
//     muName : "jumshaid",
//     age : 12 
// }

// if(myObj.prototype){
//     console.log('prototype is presenet ')
// }
// else{
//     console.log('prototype is not present')
// }

// // result >> prototype is not present 


// const myArr = [12 ,3,5 ,"Jumshaid", 0.3]

// if(myObj.prototype){
//     console.log('prototype is presenet ')
// }
// else{
//     console.log('prototype is not present')
// }

// // result >> prototype is not present 





function hello(){
    console.log("Hi, How are you!")
}


hello.prototype.abc = "abc Value"

console.log(hello.prototype) // {abc: 'abc Value'}

hello.prototype.myFun = function(){ console.log("My Name is Jimi") }
console.log(hello.prototype) //{abc: 'abc Value', myFun: ƒ}
hello.prototype.myFun2 = function(){ return "Ok, Thank You Jimi" }

console.log(hello.prototype) // {abc: 'abc Value', myFun: ƒ, myFun2: ƒ}
console.log(hello.prototype.myFun2()) // Ok, Thank You Jimi




