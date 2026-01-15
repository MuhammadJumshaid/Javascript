// 20260114 

// event loop 
// check how data prints in console 
const allButtons = document.querySelectorAll(".myButtons button");
console.log(allButtons) // NodeList(3) [button#one, button#two, button#three]

console.log("script start")
allButtons.forEach((button)=>{
button.addEventListener("click", (e)=>{
let count = 0;
for(let i = 0; i <=1000000000; i++){
    // count = count + 1;
     count = count + i;
}
console.log(e.currentTarget.textContent, count)
})
})

let outerVar = 0;
for(let i =0 ; i<=100000000; i++){
    outerVar += i; 
}
console.log("value of outer variable", outerVar)
console.log("script end")
