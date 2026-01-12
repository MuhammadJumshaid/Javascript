// 20260112 
// some old methods to support poor IE(internet explorer)
// appendChild
// insertBefore,
// replaceChild 
// removeChild

// appendChild 

// const ul = document.querySelector(".todo-list")
// const li = document.createElement("li")
// console.log(li)
// li.textContent = "newTodo"
// ul.appendChild(li)

// insertBefor 

// const ul = document.querySelector(".todo-list")
// const li = document.createElement("li")
// li.textContent = "new Todo"
// const refNode = document.querySelector(".todo-list li")
// ul.insertBefore(li, refNode)


// replaceChild 
// replacing li with refNode 

// const ul = document.querySelector(".todo-list")
// const li = document.createElement("li")
// li.textContent = "new Todo"
// const refNode = document.querySelector(".todo-list li")
// ul.replaceChild(li, refNode)

// removeChild 

const ul = document.querySelector(".todo-list")
const li = document.createElement("li")
li.textContent = "new Todo"
const refNode = document.querySelector(".todo-list li")
ul.removeChild(refNode)
