// 20260117 
// keypress event
// mouseover event
// mouseleave event

// keypress event
const body = document.body
body.addEventListener("keypress", (e)=>{
    console.log(e.key)
})

// mouseover event
const headLineBtn = document.querySelector(".btn-headline")
console.log(headLineBtn) // <button class="btn btn-headline">Learn More</button>

headLineBtn.addEventListener("mouseover", ()=>{
    console.log("mouse over event occured on button")
})

headLineBtn.addEventListener("mouseleave", ()=>{
    console.log("mouse leave event occured on button")
})