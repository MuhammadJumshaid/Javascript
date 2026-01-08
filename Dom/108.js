// 20260108 

// Get mulitple Elements 
// using getElements by class name
// using getElements by qurerySelectorAll


// getElements by class name 
// this will return html Collection 
// A group (collection) of HTML elements from a web page,
// html Collection is an array like object (we can access it with index also it has length property)
// const navItems = document.getElementsByClassName("nav-itme")
// console.log(navItems) // HTMLCollection(3) [li.nav-itme, li.nav-itme, li.nav-itme]

// console.log(navItems[0]) // <li class="nav-itme">…</li>
// console.log(navItems.length) // 3

// console.log(typeof navItems) // object
 
// console.log(Array.isArray(navItems)) // false



// document.querySelectorAll()
//  is a JavaScript method used to select multiple elements from the HTML page.
// it returns a NodeList of all elements that match a CSS selector.
// this is also array like object

const navItems = document.querySelectorAll(".nav-itme")
console.log(navItems)  // NodeList(3) [li.nav-itme, li.nav-itme, li.nav-itme]
