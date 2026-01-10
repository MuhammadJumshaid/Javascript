// 20260110
// traversing dom
// Childe relationship   
// Parent relationship
// Sibling relationship                                 
const rootNode = document.getRootNode()
console.log(rootNode) // documnent object 

// to see all the childNodes 
console.log(rootNode.childNodes) //NodeList [html]
// as nodList are array like objcts (can be accessed with index also has length propery )

console.log(rootNode.childNodes[0])
console.log(rootNode.childNodes.length) // 1

const htmlElement = rootNode.childNodes[0]
console.log("htmlElement",  htmlElement)

// now we can access child nodes of html

console.log(htmlElement.childNodes)  // NodeList(3) [head, text, body]
// const head = console.log(htmlElement.childNodes[0]) // <head>...</head>
const head = htmlElement.childNodes[0] // <head>...</head>
const textNode = htmlElement.childNodes[1] // <head>...</head>
 console.log(htmlElement.childNodes[1]) // #text (whitespace + newline)

// now see the parentNodes 
console.log(head.parentNode) 
console.log(head.parentNode) 
console.log(htmlElement.parentNode)  // document

// Sibling relationship

const htmlNode = rootNode.childNodes
console.log(htmlNode)
// console.log("nextSibling" , head.nextSibling)  // text
console.log("nextSibling" , textNode.nextSibling)  // body