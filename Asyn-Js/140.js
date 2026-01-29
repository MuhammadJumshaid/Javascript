// 20260129 

// xhr >> xmlHttpRequest


// code 

// const url = "https://jsonplaceholder.typicode.com/posts"

// const xhr = new XMLHttpRequest()
// console.log(xhr)

// xhr.open("GET", url)

// xhr.onload = function(){
//     console.log(xhr.responseText)
// }
// xhr.send()





// 🧸 What is readyState? (kid version)

// readyState tells you where the XHR delivery boy is right now.

// That’s it.

// There are ONLY 5 states (0 → 4)

// You don’t need to memorize names — just the story.

// | Number | What it means                    |
// | ------ | -------------------------------- |
// | 0      | Boy is created, doing nothing    |
// | 1      | Boy knows where to go            |
// | 2      | Boy reached the shop             |
// | 3      | Boy is coming back               |
// | 4      | Boy reached home 🎉 (DATA READY) |

// we will get the resopone(error or succes) when readystate is 4



// const url = "https://jsonplaceholder.typicode.com/posts"
// // const url = "https://jsonplaceholder.typicode.com/postsssss" // wrong url

// const xhr = new XMLHttpRequest()
// console.log(xhr.readyState) // 0
// // console.log(xhr)

// xhr.open("GET", url)
// console.log(xhr.readyState) // 1

// xhr.onreadystatechange = function(){
//     // console.log(xhr.responseText)
//     console.log(xhr.readyState) // 2 , 3, 4

//     if(xhr.readyState === 4){
//         console.log(xhr)
//         // console.log(xhr.response)
//         // console.log(typeof xhr.response) // string
//         // we will store this resopnse in a variable and then convert it into object 
//         const respons = xhr.response
//         console.log(respons)
//         const data  =   JSON.parse(respons)
//         console.log(data)
//         console.log(typeof data) // object

//         // we can againg convert object in to string by json.stringify()
//      const objData =    JSON.stringify(data)
//      console.log(objData)
//      console.log(typeof objData) // string


//     }
// }

// xhr.send()



// onload function will run when readyState  = 4 >> response arrive , so we don't need to write on changereadyState

const url = "https://jsonplaceholder.typicode.com/posts"

const xhr = new XMLHttpRequest()

xhr.open("GET", url)

xhr.onload = function(){
console.log(xhr.readyState) // 4
const res = xhr.response
const data = JSON.parse(res)
console.log(data)
console.log(xhr.status) // 200 >> ok

    }

xhr.send()







// XMLHttpRequest (XHR) is an object that lets JavaScript send HTTP requests and receive responses without reloading the page.

// So yes — XHR = AJAX

// he 5 basic steps of XHR (VERY IMPORTANT)

// Every XHR request follows this order 👇

// Create XHR object

// Open a request

// Listen for response

// Send the request

// Handle the data


// Think of XHR like a delivery boy

// You are at home (Browser).
// You want a toy (data) from a shop (Server).

// 👉 XHR is the delivery boy who goes to the shop(Server) and brings the toy(data) back without you leaving home.(refershig the page

// What is XMLHttpRequest (XHR)?

// const xhr = new XMLHttpRequest()

// “Create a delivery boy who can go to the server and bring data.”

// xhr is an object (a box with buttons and information inside).

// 2️⃣ What things (properties) does this XHR boy have?

// 🧠 Important properties (remember these only)
// Property	Means (kid version)
// readyState           	Where is the delivery boy now
// status               	Was the delivery successful or not
// responseText         	The toy (data) he brought
// onload	                What to do when toy arrives
// onerror              	What to do if boy gets lost


// 1. readyState (VERY IMPORTANT)

// readyState tells what step the delivery boy is at.

// There are 5 steps (0 to 4)
// Number	Meaning (5-year version)
   //  0       	Boy is born, not ready
   //  1       	Boy knows where to go
   //  2       	Boy reached the shop
   //  3       	Boy is coming back
   //  4       	Boy reached home 🎉


   // We care only about 4
   // xhr.readyState === 4
// Means:

// “Data is fully received”


// 2.status (success or fail)

// This tells what happened at the shop.    

// | Status | Meaning         |
// | ------ | --------------- |
// | 200    | All good ✅      |
// | 404    | Toy not found ❌ |
// | 500    | Shop broken ❌   |

// xhr.status === 200

// // Means:

// “Success”


// 3. responseText (the toy 🎁) 

// //
// This is:

// The data the server sent back
// (Always text / string)

// console.log(xhr.responseText)

//  Why do we use onload?
// xhr.onload = function () {
//     console.log(xhr.responseText)
// }

// ❌ JS does NOT wait
// ❌ Data comes later

// So we say:

// “HEY! When the delivery boy comes back, call me.”

// onload = call me when delivery is complete

// Why NOT write code after send()?

//xhr.send()
// console.log(xhr.responseText) // ❌ toy not arrived yet

// xhr.onload = function () {
//     console.log(xhr.responseText) // ✅ toy arrived
// }





