// 20260113

// this keyword 
// normal function vs arrow funtion 


// const btn = document.querySelector(".btn-headline")

// btn.addEventListener("click", function(){
//     console.log("you clicked me")
//     console.log("value of this", this) // <button class="btn btn-headline">Learn More</button>
// })




const btn = document.querySelector(".btn-headline")

btn.addEventListener("click", ()=>{
    console.log("you clicked me")
    console.log("value of this", this) //widnow obj
})



// Normal functions get "this" from how they are called
// Arrow functions get "this" from where they are written

// 1️⃣ “Normal functions get this from how they are called”

// This means:

// JavaScript does NOT care where the function is written
// JavaScript cares who is calling it

// i) 
// function show() {
//     console.log(this);
// }

// show(); 


// // ii) 

// const obj = {
//     show: show
// };
// obj.show();   
// // 👉 this = obj



// const btn = document.querySelector("button");
// btn.onclick = show;   // browser calls it

// 👉 this = btn
// ✔ Same function
// ✔ Different callers
// ✔ Different this


// Mental model for normal functions

// Ask yourself:

// What is on the left side of the dot when the function is called?

// obj.show();   // this = obj
// btn.onclick(); // this = btn


// 2️⃣ “Arrow functions get this from where they are written”

// Arrow functions do not have their own this.

// Instead, they steal this from the surrounding code at the moment they are created.


// 🧍 Normal function

// “Who called me?” 

// 🧬 Arrow function

// “Who was my parent when I was born?”

// Normal function → this decided at call time

// Arrow function → this decided at creation time