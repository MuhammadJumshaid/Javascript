// 20260112 
// clone nodes(both append and prepend)
// cloneNode()
// cloneNode(true)>> deep clonning(clone with child)

// const ul = document.querySelector(".todo-list")
// const li = document.createElement("li")
// li.textContent = "newTodo" ;
// ul.append(li)
// ul.prepend(li)

// append or prepend one method occure at a time (the second one)

// now clonning 

const ul = document.querySelector(".todo-list")
const li = document.createElement("li")
li.textContent = "newTodo" ;
// now clonning li node
const li2 = li.cloneNode(true)
ul.append(li)
ul.prepend(li2)