// 20250113 

// Static list vs live list 

// Static List (document.querySelectorAll) >> nodeList
// live list (document.getElementsByClassName, getElementsByTagName .... etc) >> htmlCollection 




// Static List 

// const listItems = document.querySelectorAll(".todo-list li")
// console.log(listItems) // NodeList(5) [li, li, li, li, li]
// const sixLi = document.createElement("li")
// sixLi.textContent = "item 6" // added in the web ui
// const ul = document.querySelector(".todo-list")
// ul.append(sixLi) // NodeList(5) [li, li, li, li, li]


// liveList 


// const listItems = document.getElementsByClassName("li") // this will get all the li in the whloe page
const ul = document.querySelector(".todo-list")
const listItems = ul.getElementsByTagName("li") // this will get all the li inside ul // 
console.log(listItems) //  HTMLCollection(5) [li, li, li, li, li]
const sixLi = document.createElement("li")
sixLi.textContent = "item 6" // added in the web ui
ul.append(sixLi) 
console.log(listItems) // // HTMLCollection(6) [li, li, li, li, li, li]