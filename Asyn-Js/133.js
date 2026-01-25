// 20260124 

// callbacks in asyn programming 
// callback hell
// pyramide of dome

// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")

// setTimeout(()=>{
// heading1.textContent = "Heading1"
// heading1.style.color = "blue"
// },1000)

// setTimeout(()=>{
// heading2.textContent = "Heading2"
// heading2.style.color = "red"
// },1000)




// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")

// setTimeout(()=>{
// heading1.textContent = "Heading1"
// heading1.style.color = "blue"
// setTimeout(()=>{
// heading2.textContent = "Heading2"
// heading2.style.color = "red"
// },1000)
// },1000)


// working 

// When JS sees setTimeout, it sends it to the browser (Web APIs) and continues execution.
// After the timer finishes, the browser puts the callback into the callback queue.
// When the call stack is empty, the event loop pushes the callback into the call stack.
// JS executes the callback line by line.
// If another setTimeout is found inside, JS again asks the browser to handle it, and the same cycle repeats.



// callback hell


const heading0 = document.querySelector(".heading0")
const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")
const heading8 = document.querySelector(".heading8")
const heading9 = document.querySelector(".heading9")
const heading10 = document.querySelector(".heading10")

// setTimeout(()=>{
// heading1.textContent = "One"
// heading1.style.color = "violet"
// setTimeout(()=>{
// heading2.textContent = "Two"
// heading2.style.color = "purple"
// },2000)
// setTimeout(()=>{
// heading3.textContent = "Three"
// heading3.style.color = "red"
// },2000)
// setTimeout(()=>{
// heading4.textContent = "Four"
// heading4.style.color = "Pink"
// },1000)
// setTimeout(()=>{
// heading5.textContent = "Five"
// heading5.style.color = "Green"
// },2000)
// setTimeout(()=>{
// heading6.textContent = "Six"
// heading6.style.color = "blue"
// },3000)
// setTimeout(()=>{
// heading7.textContent = "Seven"
// heading7.style.color = "brown"
// },1000)


// },1000)


// Task

// text         delay    color

// one          1s       violet
// two          2s       purple
// three        2s       red
// four         1s       Pink 
// five         2s       Green
// six          3s       blue
// seven        1s       brown


// Solution




// setTimeout(()=>{
// heading1.textContent = "One"
// heading1.style.color = "violet"
// setTimeout(()=>{
// heading2.textContent = "Two"
// heading2.style.color = "purple"
// setTimeout(()=>{
// heading3.textContent = "Three"
// heading3.style.color = "red"
// setTimeout(()=>{
// heading4.textContent = "Four"
// heading4.style.color = "Pink"
// setTimeout(()=>{
// heading5.textContent = "Five"
// heading5.style.color = "Green"
// setTimeout(()=>{
// heading6.textContent = "Six"
// heading6.style.color = "blue"
// setTimeout(()=>{
// heading7.textContent = "Seven"
// heading7.style.color = "brown"
// },1000)
// },3000)
// },2000)
// },1000)
// },2000)
// },2000)
// },1000)




// now doing the same work (callback hell) with functions 
// pyramid of dom


function changeTextColor(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(()=>{
        if(element){
        element.textContent = text;
        element.style.color = color
        if(onSuccessCallback){
            onSuccessCallback()
        }
}else{
    // console.log("your element does not exist")
    onFailureCallback()
}
    },time)
    
}

changeTextColor(heading1, "one", "red", 1000, ()=>{
    changeTextColor(heading2,"two", "blue", 2000 ),
    ()=>{console.log("heading2 does not exist")}
},
   ()=>{console.log("heading1 does not exist")})





























