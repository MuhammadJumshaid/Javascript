// 20260107
// Select an element

// Dom 
// Document Object Model
// Our browser sees all the elements and tags as node from top to bottom (and make a  tree shape in its memeory)
// html -> head (title , meta), Body ->(header, section)


// Our browser sees all the html file and create an object . that is clled document
// and then the browser add the docment object in the window object of javascript
// due to this documet object browser is redering all the webpage
// we can do anything on the webpage due to this document object
// we can get any information about the webpage or can change any element or can add any thing in the webpage

// Winodow is object . all the properties (also document) inside window are objects
// document is object and it stores all the information about webpage in the fomm of objects
// console.log(window)

// console.log(window.document)
// console.dir(window.document)
// // or
// // as we know winow object is preset every time so 
// console.log(document)
// console.log(document.dir)







// // Select an element
// Select Element using get element by id

// to select an element  using get element by id , the element must hav an id

document.getElementById("main-heading")
console.log(document.getElementById("main-heading")) //<h2 id="main-heading">Manage your Tasks</h2>
// here the result is not html element here h2 is an object 

// console.dir(document.getElementById("main-heading")) // h2#main-heading

console.log( typeof document.getElementById("main-heading")) // object

// Browser stores every element of our webpage as object in the doumnet
// every element of our webpage is an object

// as this is an object we will store it in cont variable


const mainHeading = document.getElementById("main-heading")
console.log(mainHeading) // <h2 id="main-heading">Manage your Tasks</h2>
