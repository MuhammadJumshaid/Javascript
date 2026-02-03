//  20260202

// Fetch() 
// fetch is a browser-built function used to request data from a server (API).

// Think of it like this:
// 🧍‍♂️ Browser: “Hey server, give me some data”
// 🖥️ Server: “Sure, here you go”
// This communication happens using HTTP.

// Before Fetch: What is HTTP? (1 minute)
// Every request has:
// URL → where to go
// Method → what you want to do

// Common methods:
// GET → get data
// POST → send data
// PUT → update data
// DELETE → delete data

// fetch is asynchronous.



// What does fetch() return?

// fetch() returns a Promise

// Not data.
// Not JSON.
// A Promise.

// const result = fetch(url);
// console.log(result); // Promise { <pending> }
// Using .then() (Step by Step)
// fetch(url)
//   .then((response) => {
//     console.log(response);
//   });


// What is response?
// response is an object, not your data yet.
// It contains:
// status → 200, 404, 500
// ok → true / false
// headers
// methods to read data

// Important rule about fetch (VERY IMPORTANT)
// fetch does NOT reject on 404 / 500
// It only rejects on:
// network failure
// CORS issues
// request blocked
// So we must manually check response.ok, just like you did with xhr.status.


// fetch(badURL)
//   .then(res => console.log("still runs"))
//   .catch(err => console.log("only network errors"));

// So we must check manually.

// ✅ Checking Success Properly
// fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Request failed");
//     }
//     return response;
//   });



// 📦 Getting Actual Data (JSON)

// Browser must convert it to JS object

// fetch(url)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   });


// .json() also returns a Promise

// Full Basic Flow

// fetch(url)
//   .then(res => {
//     if (!res.ok) throw new Error(res.status);
//     return res.json();
//   })
//   .then(data => {
//     console.log(data); // real data
//   })
//   .catch(err => {
//     console.error(err);
//   });





// alert("hi")


// const whatisThis = fetch(URL)
// console.log(whatisThis) // Promise


// const whatisThis = fetch(URL)
// .then((res)=>{
// console.log(res) // Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
// })

//  const URL = "https://jsonplaceholder.typicode.com/posts"
//  fetch(URL)
// .then((res)=>{
//  console.log(res.json())  // Promise {<pending>}
//  return res.json()
// })
// .then((data)=>console.log(data))

// error in the above code 

// You are calling res.json() TWICE:

// console.log(res.json()); // 1st time ❌
// return res.json();       // 2nd time ❌

// Why is this bad?

// A response body can be consumed only once

// Correct Way

// fetch(URL)
//   .then((res) => {
//     const jsonPromise = res.json();
//     console.log(jsonPromise); // Promise (expected)
//     return jsonPromise;
//   })
//   .then((data) => {
//     console.log(data); // actual data
//   });

// Think like this:

/// res.json()  // "Hey browser, parse JSON and give it to me LATER"


// .then() waits

// console.log() does not wait 


// fetch(URL) ------------------> Promise
//           |
//           v
//        response
//           |
//           v
//       res.json() ------------> Promise
//                               |
//                               v
//                            actual data


// Core Truth (Read this slowly)

// console.log(res.json()) is NOT “just logging”
// It EXECUTES res.json()

// JavaScript must run the function first to know what to log.

// Step-by-step: What ACTUALLY happens

// When JS sees this line:

// console.log(res.json());

// It does this internally:

// const temp = res.json(); // 👈 FUNCTION IS CALLED
// console.log(temp);

// So:

// res.json() runs

// response body starts being read

// stream is consumed

// Even though your intention was “just to see it”.

// Why this matters (the stream rule)
// Fetch response body is a stream

// A stream can be read only once.


// res.json(); // consumes the body ❌
// res.json(); // nothing left ❌


// This is not about console
// This is about function execution

// Analogy (Very important 🧠)

// res.json() = open and drink a bottle

// console.log() = look at what you drank

// If you do:

// console.log(drinkBottle());
// drinkBottle();

// You didn’t look twice —
// You drank twice, but the bottle was empty the second time 😄






// Key rule to memorize 🔒

// ❗ Any function call runs, even inside console.log

// JavaScript does not know your intention.





//  const URL = "https://jsonplaceholder.typicode.com/posts"
//  fetch(URL)
// .then((res)=>{
//  return res.json()
// })
// .then((data)=>console.log(data))

// for error 


//  const URL = "https://jsonplaceholder.typicode.com/postsssssssss"
//  fetch(URL)
// .then((res)=>{
//     if(res.ok){
//     console.log("inside then")
//     console.log(res)
//  return res.json()
//  }else{
//     console.log("something went wrong")
//  }
// })
// .then((data)=>console.log(data))
// .catch((err)=>{
//     console.log("inside catch")
//     console.log(err)
// })


// for post request 


 const URL = "https://jsonplaceholder.typicode.com/posts"
 fetch(URL, {
    method : 'POST',
    body : JSON.stringify({
        id : 1222,
        title : "Hi",
        body : "jImi"

    }),
    headers :{
        'Content-type' : 'application/json'
    },
 })
 
.then((res)=>{
    if(res.ok){
    console.log("inside then")
    console.log(res)
 return res.json()
 }else{
    console.log("something went wrong")
 }
})
.then((data)=>console.log(data))
.catch((err)=>{
    console.log("inside catch")
    console.log(err)
})