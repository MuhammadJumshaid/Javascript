// 20260115 

// task (little preactice with click event)
// you have three buttons when click on any button its color should change

const allButtons = document.querySelectorAll(".myButtons button")
console.log(allButtons) // NodeList(3) [button#one, button#two, button#three]

allButtons.forEach((button)=>{
button.addEventListener("click", (e)=>{
e.target.style.color = "grey"
e.target.style.background = "yellow"
})
})