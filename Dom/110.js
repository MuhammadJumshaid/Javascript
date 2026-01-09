// 20260109 

// innerHtml 
 // innerHTML is a JavaScript property used to get or set the HTML content inside an element.
 // Read HTML inside an element
// Replace or insert HTML inside an element

const headLine = document.querySelector(".headline")
console.log(headLine.innerHTML) // everything inside the element(div) where this class lies

headLine.innerHTML = "Hi My Name is Jumshaid"
headLine.innerHTML += "<h1>Hi My Name is Muhammad Jumshaid</h1>"
headLine.innerHTML += "<h1>Hi My Name is Muhammad Jimi</h1>"
headLine.innerHTML += "<button>Ok</button>"
// headLine.innerHTML += "<button class = "btn" >Ok</button>" // error >> because "" can't be inside ""

headLine.innerHTML += "<button class = \"btn\" >Ok</button>" 
// here backSlash and one double commas are equal to one double commas 
// \" = " >> or \"  -------------->   "


// diff b/w innerText , textContent and innerHtml 

// innerHtml   =  return html , include hidden texts, parse html, slow
// innerText   = Returns visible text only , affected by css , slower
// textContent = include hidden text , fast (Recommened)


// When to use what 
// Use innerHTML
// → When you need to insert or read HTML
// Use innerText
// → When you want only what the user sees 
// Use textContent (recommended)
// → When working with plain text safely and efficiently 




