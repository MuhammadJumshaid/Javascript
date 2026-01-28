// 20260128 

// callback hell to promise

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
function changeTextColor(element,text,color,time){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(element){
            element.style.color = color
            element.textContent = text;
            resolve("resolved")
        }
        else{
           reject()
        }
    },time)
    })
}

// .then() alway return a promise , don't forgert to return promise

changeTextColor(heading1,"one","red", 1000)

        .then(()=>{return changeTextColor(heading12,"one","red", 1000)})
        .then(()=>{return changeTextColor(heading2,"one","red", 1000)})
        .then(()=>{return changeTextColor(heading3,"one","red", 1000)})
        .then(()=>{return changeTextColor(heading4,"one","red", 1000)})
        .then(()=>{return changeTextColor(heading5,"one","red", 1000)})
        .then(()=>{return changeTextColor(heading6,"one","red", 1000)})
        .then(()=>{return changeTextColor(heading7,"one","red", 1000)})
        .then(()=>{return changeTextColor(heading8,"one","red", 1000)})
        .then(()=>{return changeTextColor(heading9,"one","red", 1000)})
        .then(()=>{return changeTextColor(heading10,"one","red",1000)})
        .then(()=>{return changeTextColor(heading11,"one","red",1000)})
   
  
.catch(()=>{console.log("rejected")})






