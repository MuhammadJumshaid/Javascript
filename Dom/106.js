// 20260107 

//   Change the styles of elements 

// selecting main-heading id which is inside div whose class is headline
// var myText = document.querySelector("div.headline #main-heading")
const myText = document.querySelector("div.headline h2")
// as we know that js stores all the elements as objects so myText is also an object. it has a propery style that is also an object has many properties in camelCase
console.log(myText.style)
console.log(myText) //<h2 id="main-heading">…</h2>

// now we will change its color 
myText.style.color = "Blue"
myText.style.background = "yellow"
myText.style.border = "5px solid white"