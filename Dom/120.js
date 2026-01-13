// 20260113
// Introduction to events 
// click(onClick(used 90% from all events))
// there are three ways to add events 

// fire event in the html (on the element(button)) 
// onClick = "" >> in the string wwe will write the js code , this is the old method so we not use this method


/// 2.
// const btn = document.querySelector(".btn-headline")
// console.log(btn) // <button class="btn btn-headline">Learn More</button>
// // to see the element in obj format
// console.dir(btn)
// btn.onclick = function(){
//     console.log("you cliked me") // you cliked me
// }

// we will also not use this method because we cannot assign more than one function ot the click event , if i write the more function the last one will overwrites the first all .


// console.dir(btn)
// btn.onclick = function(){
//     console.log("you cliked me") //
// }
// btn.onclick = function(){
//     console.log("Ok") // Ok
// }

// now this will print only the second function console "ok"

// 3 . we have a method addEventListener
// this method will take to things (parameter) one is which event you want to fire , the second is function 

// function ClikMe(){
//     console.log("you Clicked me ")
// }
// const btn = document.querySelector(".btn-headline")
// btn.addEventListener("click", ClikMe)

/// you can define the function inside the addEventListener




// const btn = document.querySelector(".btn-headline")
// btn.addEventListener("click", function ClikMe(){
//     console.log("you Clicked me ")
// })

// or 

// const btn = document.querySelector(".btn-headline")
// btn.addEventListener("click", function(){
//     console.log("you Clicked me ")
// })

// you can also use arrow function (Recommended)
const btn = document.querySelector(".btn-headline")
btn.addEventListener("click", ()=>{
    console.log("you Clicked me ")
})
