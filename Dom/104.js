// 20260107 
// Select element using Query Selector and querey selector all 
// here we select elements just like we do in css
// to select an id with querySelector(), we have to use "#" hash sign befor id
// to select a class with querySelector(), we have to use "." dot sign befor id

// In JavaScript, document.querySelector and document.querySelectorAll are used to select elements from the DOM using CSS selectors.
// document.querySelector()
// 🔹 Returns: the first element that matches the selector
// 🔹 If no match: returns null

// in the whole web page we can't have id more than one time with the same(name)
// id must be unique in the whole web page


// const mainHeading =  document.querySelector("#main-heading")
// console.log("gg", mainHeading)



// const myItem =  document.querySelector(".nav-itme")
// console.log("result", myItem)


// document.querySelectorAll()

// 🔹 Returns: all matching elements
// 🔹 Type: NodeList (not an array, but iterable)

// const myItem =  document.querySelectorAll(".nav-itme")
// console.log("result", myItem) // NodeList(3) [li.nav-itme, li.nav-itme, li.nav-itme]


// if we have more than one element or classes in a page and we are accessing it with querySelector this give us only the first element , but querySelectorAll will give us all the elements