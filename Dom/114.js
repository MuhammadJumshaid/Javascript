// 20260112 

// document.createElement()
// append (or appendCild)
// prepend
// remove()
// before 
// after 
// append (appendChild)
// append add new element at the end(in the parent element)

// const todoList = document.querySelector(".todo-list")
// console.log(todoList) // <ul class="todo-list">…</ul>

// const newtodoItem = document.createElement("li")
// console.log(newtodoItem) // <li></li>

// const newtodoItemText = document.createTextNode("ToDo2")
// newtodoItem.append(newtodoItemText)
// console.log(newtodoItem) // <li>ToDo2</li>

// todoList.appendChild(newtodoItem)
// console.log(todoList)


// Short method

// const todoList = document.querySelector(".todo-list")

// const newtodoItem = document.createElement("li")

// newtodoItem.textContent = "ToDo 2"

// todoList.appendChild(newtodoItem)


// prepend 
// prepend add new element at the start
// const todoList = document.querySelector(".todo-list")

// const newtodoItem = document.createElement("li")

// newtodoItem.textContent = "ToDo 2"

// todoList.prepend(newtodoItem)

// remove 
// remove the first element 
// const todo1 = document.querySelector('.todo-list li')
// console.log(todo1) // <li>Todo1</li>
// todo1.remove();



// insert before 

// const todoList = document.querySelector(".todo-list")

// const newtodoItem = document.createElement("li")

// newtodoItem.textContent = "todo before ul"

// todoList.before(newtodoItem)

// insert after 


const todoList = document.querySelector(".todo-list")

const newtodoItem = document.createElement("li")

newtodoItem.textContent = "todo before ul"

todoList.after(newtodoItem)







// append vs appendChild 
// append and appendChild are both same. they append the child into parent Element.
// appendChild is older but append is new 
// append does not work in internet explorer 
