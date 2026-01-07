// 20260107/08 
// get and set attributes 
// HTML attributes provide extra information about an element.
// like id , class, style , href, src , alt , title,  disabled    

// Boolean Attributes >> dont need a value i.e 
// <input required>
// <input checked>, 

// JavaScript can read, set, change, and remove HTML attributes.

// const link = document.querySelector("a")
// console.log(link) // <a href>Home</a>   

// // here link is an object which has properties getAttribut and setAttribute

// console.log(link.getAttribute("href")) // https://www.youtube.com/


// const link = document.querySelector("form input")
// console.log(link) // <a href>Home</a>   

// // here link is an object which has properties getAttribut and setAttribute

// console.log(link.getAttribute("type")) //text

// we can change the value of attributes with setAttribute method

const changedAttibute = document.querySelector("a")
console.log(changedAttibute.getAttribute("href")) // https://www.youtube.com/
changedAttibute.setAttribute('href' , "Hii, Jimi")
console.log(changedAttibute.getAttribute("href")) // Hii, Jimi 
changedAttibute.setAttribute('href' , "Hii, Jimi")

console.log( changedAttibute.getAttribute("href").slice(0,2)) // HI
