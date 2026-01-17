// 20260117

// const body = document.body
// const clickBtn = document.querySelector(".btn")
//   let  red = ""
//   let  green = ""
//   let  blue = ""
//   let rgb = "rgb(0, 0, 0)"
// let h1 = document.querySelector("h1")


// clickBtn.addEventListener("click",()=>{
//     red = Math.floor(Math.random() * 256)
//     green = Math.floor(Math.random() * 256)
//     blue = Math.floor(Math.random() * 256)
// rgb = `rgb(${red}, ${red}, ${blue})`
// h1.textContent = `Current Color : ${rgb}`
//     console.log(red)
//     console.log(green)
//     console.log(blue)
//     body.style.background = rgb;
// })


// correct way


const mainButton = document.querySelector("button")
const body = document.body
const currentColor = document.querySelector(".currentColor")
console.log(currentColor)
function randomColorGenerator(){
const red = Math.floor(Math.random() * 256)
const green = Math.floor(Math.random() * 256)
const blue = Math.floor(Math.random() * 256)
const randomColor = `rgb(${red}, ${green}, ${blue})`
return randomColor;
}
mainButton.addEventListener("click", ()=>{
  const  randomColor = randomColorGenerator();
  console.log("randomColor : ", randomColor)
  body.style.background = randomColor
  currentColor.textContent = randomColor
})

