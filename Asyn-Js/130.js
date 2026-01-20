// 20260120 
// syncronous programming vs asyncronous programming
// setTimeout
// clearTimeout


// Syncronous 
// js is a Syncronous programming language (single thread)
// Single thread >> doing one task in time then the other 
// execute code one by one (line by line)
//In synchronous programming, tasks are executed one by one, in sequence.

// ➡️ Each operation waits for the previous one to finish before moving on.

// Blocking behavior

// The program stops until the current task completes
// Can freeze the browser


// Asyncronous
// js is a Syncronous programming language (single thread) but it behaves asyncronously 
// can do more than one task in one time(multi threaded)
// actually browsers(external api's) do work for js
// /In asynchronous programming, tasks can run independently.
// ➡️ Long-running tasks don’t block the main thread.
// JavaScript is single-threaded, but still handles async tasks.


// 3 Real-Life Example
// 🧑‍🍳 Synchronous

// You cook food and stand there waiting until it’s done before doing anything else.

// 🧑‍🍳 Asynchronous

// You start cooking, do other tasks, and come back when the food is ready.


// Syncronous 

// console.log("script start .....")

// for(i = 1 ; i<10000; i++){
//     console.log("Allah is great")
// }

// console.log("script end .....")




// setTimeout()
// setTimeout is a JavaScript asynchronous function used to execute a function after a specified delay.
// It does not block the main thread.
//function → code to run

// delay → time in milliseconds (1000 ms = 1 second)

// args → optional arguments for the function

// here time in milisecond is the minimum delay time 
// execution >> min delay time + wait for Call Stack to be empty.



// Asyncronous




// console.log("script start .....")

// setTimeout(function hello(){
//     console.log("Alhamdulillah")
// }, 1000) // 1second

// console.log("script end .....")


// console.log("script start .....")

// function hello(){
//     console.log("Alhamdulillah")
// }


// setTimeout(hello , 2000)

// console.log("script end .....")



// console.log("script start .....")
// setTimeout(()=>{
//     console.log("Alhamdulillah")
// } , 0)

// console.log("script end .....")




// console.log("script start .....")
// setTimeout(()=>{
//     console.log("Alhamdulillah")
// } , 0)

// for(i = 1 ; i<100; i++){
//     console.log("Allah is great")
// }

// console.log("script end .....")


// clearTimeout 
// setTime out will give us an id that we store in a varible , then we can clear setTimeout(if we don't want to execute it)
// clearTimeout() is used to cancel a timer that was previously created using setTimeout().


// console.log("script start .....")
// const id = setTimeout(()=>{
//     console.log("Alhamdulillah")
// } , 0)

// console.log("setTimeout",id)

// for(i = 1 ; i<100; i++){
//     console.log("Allah is great")
// }

// clearTimeout(id)

// console.log("script end .....")


// realLife example for setTimeout and clearTimeOut

// const Startbtn = document.querySelector(".start");
// const Cancelbtn = document.querySelector(".cancel");
// const counter = document.querySelector(".count")

// let count = 0

// Startbtn.addEventListener("click", ()=>{
//     count++
//    counter.textContent  =   count
//     console.log(count)
// })
// Cancelbtn.addEventListener("click", ()=>{
//     count = 0
//    counter.textContent  =   count
// })



// now with withTimeout and clearTimeout 

const Startbtn = document.querySelector(".start");
const Cancelbtn = document.querySelector(".cancel");
const counter = document.querySelector(".count")
let count = 0
let timeOutId
Startbtn.addEventListener("click", ()=>{
    
    clearTimeout(timeOutId)
    const timeOutId = setTimeout(()=>{
        count++
        counter.textContent  =   count
    }, 1000)
   
    console.log(count)
})
Cancelbtn.addEventListener("click", ()=>{
       clearTimeout(timeOutId)
})

