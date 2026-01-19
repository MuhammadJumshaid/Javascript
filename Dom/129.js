// 20260118
// toDo list

// const inputText = document.querySelector(".form-todo input[type='text']");
// console.log(inputText);

// const buttonSubmit = document.querySelector(".form-todo input[type='submit']");
// console.log(buttonSubmit);

// buttonSubmit.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(inputText.value);
//   const inputValue = inputText.value;
//   console.log(inputValue);

//   const toDoList = document.querySelector(".todo-list");
//   console.log(toDoList);
//   const mynewTodo = document.createElement("li");
//   console.log(mynewTodo);

//   mynewTodo.innerHTML = `
//                 <span class="text">${inputValue}</span>
//                  <div class="todo-btn">
//                     <button class="todo-btn done">Done</button>
//                     <button class="todo-btn remove">Remove</button>
//                 </div>
//                `;
//   console.log(mynewTodo);
//   toDoList.append(mynewTodo);
//   console.log(toDoList);
// });

// const toDoList = document.querySelector(".todo-list");
// const remveLi = document.querySelector(".todo-list li")
// remveLi.addEventListener("click",(e)=>{
//   if(e.target.textContent == "Remove"){
//     remveLi.textContent = ""
//   }
//   else{
//   }
// })

// Soulution

const todoForm = document.querySelector(".form-todo");
console.log(todoForm); // <form class="form-todo">…</form>flex
const todoInput = document.querySelector(".form-todo input[type='text']");
console.log(todoInput); // <input type="text" name id placeholder="Add todo">

const todoList = document.querySelector(".todo-list");
console.log(todoList); // <ul class="todo-list">…</ul>

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
  console.log("input text : ", todoInput.value);
  const newTodoText = todoInput.value;

  const newLi = document.createElement("li");
  const newLiInnerHtml = `<span class="text"> ${newTodoText} </span>
                <div class="todo-btn">
                    <button class="todo-btn done">Done</button>
                    <button class="todo-btn remove">Remove</button>
                </div>`;
  newLi.innerHTML = newLiInnerHtml;
  console.log(newLi);
  todoList.append(newLi);
  todoInput.value = "";

});

todoList.addEventListener("click", (e)=>{
console.log(e.target)
console.log(e.target.classList)

if(e.target.classList.contains("remove")){
const targetedNode = e.target.parentNode.parentNode
console.log("targetNode", targetedNode)
targetedNode.remove()
}
if(e.target.classList.contains("done")){
const liSpan = e.target.parentNode.previousElementSibling
console.log("lispan", liSpan)
liSpan.style.textDecoration = "line-through"
}

})