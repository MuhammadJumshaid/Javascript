// 20260122 
// 20260123 >> callback fun

// closure + shared state



// closures don't breaks loops , shared vairables do

// A closure just means:

// “This function can use a variable later, even after the loop finishes.”

// Closure just means:

// “Remember the variable, not the value.”

// var >> one shared variable 

// for(var i = 0 ; i<3 ; i++){
//     setTimeout(()=>{
//         console.log(i)
//     }, 1000)
// }

// Result ?? >> 3, 3, 3



// for(let i = 0 ; i<3 ; i++){
//     setTimeout(()=>{
//         console.log(i)
//     }, 1000)
// }

// result >>   0,  1, 2


// callback functions

// A callback function is a function you give to another function,
// so it can be called later.

// this is used with setTimeout, addEventListener, etc ... 
// Why are callbacks used?

// Because JavaScript often says:

// “I’ll finish this task later…
// and then I’ll call your function.”

// Examples:

// setTimeout

// addEventListener

// fetch


// function fun1(calbak){
//     console.log("i am fun1")
//     calbak()
// }
// function fun2(){
//     console.log("i am fun2")
// }

// fun1(fun2)



// button.addEventListener("click", () => {
//     console.log("Button clicked");
// });
// You give JavaScript a function

// JavaScript says:

// “I’ll call this when the button is clicked”

// important thing to understand 🧠
// This function is NOT called by you
// () => {
//     console.log("Clicked");
// }

// It is called by JavaScript

// 👉 later, when something happens.

// That’s why it’s called a callback.


// One golden line (remember this)

// A callback is not executed now — it is executed later by someone else.



// function fun1(){
//     console.log("function is doing task1")
// }
// function fun2(){
//     console.log("function is doing task2")
// }
// fun1()
// fun2()

// we want that when fun1 has printed then fun2 will be called , we can pass here fun2 as callbak, this will be called after fun1 prints its console


// function fun1(callback){
//     console.log("function is doing task1")
//     callback()
// }
// function fun2(){
//     console.log("function is doing task2")
// }
// fun1(fun2)

// we can also write this 

// function fun1(callback){
//     console.log("function is doing task1")
//     callback()
// }
// fun1(function(){
//     console.log("function is doing task2")
// })

// or

// function fun1(callback){
//     console.log("function is doing task1")
//     callback()
// }
// fun1(()=>{
//     console.log("function is doing task2")
// })



// now other example 

// function getTwoNumbersandResult(number1, number2, callback){
//     console.log(number1, number2)
//     callback(number1, number2)
// }

// function addTwoNumbers(a, b){
// console.log(a + b)
// }

// getTwoNumbersandResult(3,4,addTwoNumbers)



// function getTwoNumbersandResult(number1, number2,calbak){
//     console.log(number1, number2)
//     calbak(number1, number2)
// }

 
// getTwoNumbersandResult(3,4,(num1, num2)=>{
//     console.log(num1 + num2)
// })



// function getTwoNumbersandResult(number1, number2, callback){
//     if(typeof number1 == "number" && typeof number2 == "number"){
//     callback(number1, number2)
//     }
//     else{
//         console.log("wrong date entered")
//     }
// }

// function addTwoNumbers(a, b){
// console.log(a + b)
// }

// getTwoNumbersandResult("3","4",addTwoNumbers)



// now passing more than one callbacks

function getTwoNumbersandResult(number1, number2,onSuccess, onFailure){
    if(typeof number1 === "number" && typeof number2 === "number"){
    onSuccess(number1, number2)
    }
    else{
      onFailure()
    }
    
}

 
getTwoNumbersandResult("3",4,(num1, num2)=>{
    console.log(num1 + num2)
}, ()=>{
    console.log("wrong data enterd")
})






