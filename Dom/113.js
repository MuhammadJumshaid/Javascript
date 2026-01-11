// 20260111 

// innerHtml 
// when to use when should not use 

const toDoList = document.querySelector(".todo-list")
console.log(toDoList) // <ul class="todo-list">…</ul>
console.log(toDoList.innerHTML) // /n (whitespace) +   <li>Todo1</li>

toDoList.innerHTML = "<li>New Todo</li>"
toDoList.innerHTML = toDoList.innerHTML + "<li>New Todo1</li>"
toDoList.innerHTML = toDoList.innerHTML + "<li>New Todo2</li>"
// or simply 

toDoList.innerHTML +=  "<li>New Todo3</li>"
toDoList.innerHTML +=  "<li>New Todo4</li>"



// when to use when should not use 

// never use this like above to add new element with innerHtml due to performance issues

// use this when you have to change the html(not append new things)




