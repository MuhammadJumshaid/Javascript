// 20260124 

// callbacks in asyn programming 

// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")

// setTimeout(()=>{
// heading1.textContent = "Heading1"
// heading1.style.color = "blue"
// },1000)

// setTimeout(()=>{
// heading2.textContent = "Heading2"
// heading2.style.color = "red"
// },1000)




const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")

setTimeout(()=>{
heading1.textContent = "Heading1"
heading1.style.color = "blue"
setTimeout(()=>{
heading2.textContent = "Heading2"
heading2.style.color = "red"
},1000)
},1000)


// working 

// When JS sees setTimeout, it sends it to the browser (Web APIs) and continues execution.
// After the timer finishes, the browser puts the callback into the callback queue.
// When the call stack is empty, the event loop pushes the callback into the call stack.
// JS executes the callback line by line.
// If another setTimeout is found inside, JS again asks the browser to handle it, and the same cycle repeats.
