// 20260111 
// ClassList 
// Add , Remove , toggle classes using js

// const sectionTodo  = document.querySelector(".section-todo")
// console.log(sectionTodo) // <section class="section-todo container ">…</section>

// // to check ho much classes we have in the section 

// console.log(sectionTodo.classList) // DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container ']

// console.log(sectionTodo.classList[1]) // container

// how to add class with js

// const headline2 = document.querySelector(".headline")
// console.log(headline2) // <div class="headline">…</div>
// const headLine = console.log(headline2.classList.add("headline2")) //
// console.log(headLine) //  <div class="headline headline2">…</div>
// let ok = document.querySelector(".headline2")

// ok.style.color = "red"
// ok.style.border = "2px solid blue"


// // how to remove class with js

// const Headline = document.querySelector(".headline")
// console.log(Headline)
//  console.log(Headline.classList.remove("headline"))
//  const removeHeadline = document.querySelector(".headline")
//  console.log(removeHeadline) // null 
 
  
// to check if the class exits or not 
//  const Headline = document.querySelector(".headline")
//  console.log(Headline)
// console.log(Headline.classList.contains("headline")) // true
// console.log(Headline.classList.contains("abc")) // false


// Toggle 
// if class exits it will be removed , if it not exitst this will be added 

 const Headline = document.querySelector(".headline")
 console.log(Headline)
  console.log(Headline.classList.contains("headline")) // true
 console.log(Headline.classList.contains("abc")) // false

 // as abc class is not present to it will be added 

 console.log(Headline.classList.toggle("abc"))
 console.log(Headline.classList.contains("headline")) // true
 console.log(Headline.classList.contains("abc")) // true

 // as abc class is present so it will be removed 
 
 console.log(Headline.classList.toggle("abc"))
 console.log(Headline.classList.contains("headline")) // true
 console.log(Headline.classList.contains("abc")) // false


