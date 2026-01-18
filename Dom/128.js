// 20260118 
// event bubbling / event propogation
// event capturing 
// event delegation 

// Note >> if we click on any element on at event occure , if the same evet occure on other(its parent or child), these will be bubbles or captured by addEventLister otherwise not


// event bubbling / event propogation

// Event bubbling means that an event starts from the deepest (target) element and then bubbles up to its parent elements, one by one, until it reaches the document.
// 👉 Bottom → Up

// console.log("hello world")

// const grandParent = document.querySelector(".grandparent")
// const Parent = document.querySelector(".parent")
// const Child = document.querySelector(".child")

// Child.addEventListener("click", ()=>{
//     console.log("you click on child ")
// })

// Parent.addEventListener("click", ()=>{
//     console.log("you click on parent ")
// })


// grandParent.addEventListener("click", ()=>{
//     console.log("you click on grandParent ")
// })

// document.body.addEventListener("click", ()=>{
//     console.log("you click on body ")
// })



// Event capturing
// Event capturing is the opposite of bubbling.
// 👉 Top → Down
// The event starts from the document, goes down through parents, and finally reaches the target element.

// 🔹 How to Enable Capturing?

// You must explicitly enable it using true or { capture: true }.


// Child.addEventListener("click", ()=>{
//     console.log("Captured !!!! child ")
// }, true)

// Parent.addEventListener("click", ()=>{
//     console.log("Captured !!!! parent ")
// }, true)


// grandParent.addEventListener("click", ()=>{
//     console.log("Captured !!!! grandParent ")
// }, {capture : true})

// document.body.addEventListener("keypress", ()=>{
//     console.log("Captured !!!! body ")
// }, true)




// grandParent.addEventListener("click", ()=>{
//     console.log("Captured !!!! grandParent ")
// }, {capture : true})

// document.body.addEventListener("click", ()=>{
//     console.log("Captured !!!! body ")
// }, true)


// Child.addEventListener("click", ()=>{
//     console.log("you click on child ")
// })

// Parent.addEventListener("click", ()=>{
//     console.log("you click on parent ")
// })



// What is Event Delegation?

// Event delegation is a technique that uses event bubbling to handle events efficiently.

// Instead of adding event listeners to many child elements, you:
// ✔️ Add one listener to a parent
// ✔️ Handle child events using event.target




// const grandParent = document.querySelector(".grandparent")

// grandParent.addEventListener("click", (e)=>{
// console.log(e.target)
// console.log(e.target.textContent)
// })

// how to stop bubbling

//  if you don't want your envent to propogate you can use event.stopPropagation();



const grandParent = document.querySelector(".grandparent")
const Parent = document.querySelector(".parent")
const Child = document.querySelector(".child")

Child.addEventListener("click", (e)=>{
    e.stopPropagation()
    console.log("you click on child ")
})

Parent.addEventListener("click", ()=>{
    console.log("you click on parent ")
})


grandParent.addEventListener("click", ()=>{
    console.log("you click on grandParent ")
})

document.body.addEventListener("click", ()=>{
    console.log("you click on body ")
})
