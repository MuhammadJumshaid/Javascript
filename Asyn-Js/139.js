// 20260128 

// Ajax (Basic Theory)

// Ajax : Asyncronous javascript and XML

// is a set of web development technologies
// using many technologies on the client-side
// to create asyncronous web applications

// xml is data format but we don't use it now

// with ajax web applications can send and retrieve 
// data from a server asyncrionously(in the background)
// without interfering with the display and 
// behaviour of the existing page

// we don't use data in xml formate anymore
// we use json now

// we have 3 most common way to create and send request to server
// 1). xmlHttpRequest(old way of doing) >> or xhr
// 2). fech api (new way of doing)
// 3.) this is the third pary librar 








// from net

// AJAX means:
// “Talk to the server without refreshing the page.”


// The basic idea (very important)

// Browser does 5 things:

// User clicks something

// JS sends request to server

// Server processes request

// Server sends response

// JS updates the page (DOM)

// 👉 Page does not reload




// AJAX is not one thing ❌

// AJAX is a technique, not a function.


// ❌ Thinking AJAX pauses JS
// ❌ Thinking data is available immediately

// the resopnse data will be a promise 

// const data = fetch(url)
// console.log(data) // ❌ Promise, not data

// as we know we can apply then method on promise

// fetch(url).then(data => console.log(data)) 


// AJAX = asynchronous communication with server without reloading the page




// What is XHR?

// XMLHttpRequest (XHR) is an object that lets JavaScript send HTTP requests and receive responses without reloading the page.

// So yes — XHR = AJAX


//  The 5 basic steps of XHR (VERY IMPORTANT)

// Every XHR request follows this order 👇

// Create XHR object

// Open a request

// Listen for response

// Send the request

// Handle the data



// Unlike Promises:

// XHR uses callback queue

// fetch(promise) uses microtask queue