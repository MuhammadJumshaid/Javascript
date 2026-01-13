// 20260113 
// handling click on multiple buttons

// const firstBtn = document.querySelector("#one")
// console.log(firstBtn) // <button id="one">My Button 1</button>

// firstBtn.addEventListener("click", function(){
//     console.log("You clicked me ")
// })


const allBtns = document.querySelectorAll(".myButtons button")
console.log(allBtns) // NodeList(3) [button#one, button#two, button#three]

// for (let button of allBtns){
//     button.addEventListener("click",function(){
//         console.log("You clicked me")
//         console.log(this)
// console.log(this.textContent) 
//     })
// }


// for (let i = 0 ; i<allBtns.length ; i++){
//     allBtns[i].addEventListener("click",function(){
//         console.log(this.textContent) 
//  } )
// }

allBtns.forEach(function(btn){
btn.addEventListener("click", function(){
    console.log(this.textContent)
})
})