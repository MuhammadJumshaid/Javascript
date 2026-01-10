// // 20260110
// // traversing dom
// // Childe relationship   
// // Parent relationship
// // Sibling relationship                                 
// const rootNode = document.getRootNode()
// console.log(rootNode) // documnent object 

// // to see all the childNodes 
// console.log(rootNode.childNodes) //NodeList [html]
// // as nodList are array like objcts (can be accessed with index also has length propery )

// console.log(rootNode.childNodes[0])
// console.log(rootNode.childNodes.length) // 1

// const htmlElement = rootNode.childNodes[0]
// console.log("htmlElement",  htmlElement)

// // now we can access child nodes of html

// console.log(htmlElement.childNodes)  // NodeList(3) [head, text, body]
// // const head = console.log(htmlElement.childNodes[0]) // <head>...</head>
// const head = htmlElement.childNodes[0] // <head>...</head>
// const textNode = htmlElement.childNodes[1] // <head>...</head>
//  console.log(htmlElement.childNodes[1]) // #text (whitespace + newline)

// // now see the parentNodes 
// console.log(head.parentNode) 
// console.log(head.parentNode) 
// console.log(htmlElement.parentNode)  // document

// // Sibling relationship

// const htmlNode = rootNode.childNodes
// console.log(htmlNode)
// console.log("nextSibling" , head.nextSibling)  // text (object )>> data  = "\n    "
// // console.log("nextSibling" , textNode.nextSibling)  // body

// // to ignore text node and get the next elemet node we have property nextElementNode 

// console.log("nextSibling" , head.nextElementSibling) // body
// console.log("nextSibling" , head.childNodes) // NodeList(7) [text, title, text, script, text, style, text]


// // browser update our webpage with this documnet object model so,
// // Why white spaces are not visilbe in the dom like \n (newlines) ??
// // ans : browser has set the whitespace to normal by default , if we change it to pre in the style then whitespaces will be visible 



// // Task >> select heading , then go to its parent then change its(parent) background

// // const heading =  document.querySelector("h1")
// // console.log("heading",heading)
// // const headingParent = heading.parentElement
// // console.log(headingParent)
// // headingParent.style.background = "blue"


// // solution 

// //  const h1 =  document.querySelector("h1")
// //  const div = h1.parentNode
// // console.log(div) // <div class="container">…</div>
// // div.style.color = "#efefef"
// // div.style.background = "#333"


// // not go to body 


// //  const h1 =  document.querySelector("h1")
// //  const body = h1.parentNode.parentNode
// // body.style.color = "#efefef"
// // body.style.background = "#333"


// // we can access body directly 

// // const body = document.body
// // body.style.color = "red"


// // querySelectorUse
// we can use querySelector not only on document but any node element

//  const head = document.querySelector("head")
//  console.log(head)//  
// // using querySelector on head

// const title = head.querySelector("title")
// console.log(title) // <title>Dom Traversing</title>
// console.log(title.childNodes) //  NodeList [text]
 
// to ignore the text node we have propery children

const container = document.querySelector(".container")
console.log(container) //  <div class="container">…</div>
console.log(container.childNodes)  // NodeList(5) [text, h1, text, p, text]
console.log(container.children)  //  HTMLCollection(2) [h1, p]
console.log(container)  //  HTMLCollection(2) [h1, p]