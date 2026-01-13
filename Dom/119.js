// 20260113

// How to get the dimension of elements
// height , width  .....

const sectionTodo = document.querySelector(".section-todo")
const infoObj = sectionTodo.getBoundingClientRect()
console.log(infoObj) // DOMRect >> top,bottom , left , right , height, width, x , y 
const getHeight = sectionTodo.getBoundingClientRect().height
console.log(getHeight) // ans in pix