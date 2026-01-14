// 20260114 

// event object 

// const firstBtn = document.querySelector("#one")
// console.log(firstBtn) //<button id="one">My Button 1</button>

// firstBtn.addEventListener("click", function(){
//     console.log(this)  // <button id="one">My Button 1</button>
//     console.log(this.textContent) // My Button 1
// })

// in case of arrow function

// const firstBtn = document.querySelector("#one")
// console.log(firstBtn) //<button id="one">My Button 1</button>

// firstBtn.addEventListener("click", ()=>{
//     console.log(this)   // window object 
//     console.log(this.textContent)  // undefined 
// })


// jab bhi kisi bhi element(button >>in js dom(object)) pr eventListener ko add ho ga  
// js engine --- line by line execute krta he 
// browser --- js engine + extra features(web api)
// // browser --- js engine + Webapi(mini application that work for us)

// jb browser ko pta chla k user ne event perfom kia (button pr clik kiya)
// event >> jo hm listen kr rhe they (eventlistener)

// browser 2 kam kre ga 
//  1. callback function js engine ko de ga jo is ko execute kre ga
// 2. callback function ke sath jo event howa he os ki information bhi de ga  
// ye iformation hmen object ke form me mile gi(os object kon hm recieve kren ge )
// we can recieve that ifo via arg in the fun


// const firstBtn = document.querySelector("#one")
// console.log(firstBtn) //<button id="one">My Button 1</button>

// firstBtn.addEventListener("click", function(abc){
//     console.log(this.textContent) // My Button 1
//     console.log(abc) // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
//     console.log(abc.target) // <button id="one">My Button 1</button>
//     console.log(abc.target.textContent) //     one">My Button 1
// })

// in this obj two properties(objects) are more important form us (target and currentTarget)


// function hello(abc){
//     console.log(abc)
//     console.log(abc.firstKey) // value1
// }
// hello({firstKey : "value1", secondKey : "value2"})  // browser is doing this work for us  (here giving us object)



// const firstBtn = document.querySelector("#one")
// console.log(firstBtn) //<button id="one">My Button 1</button>

// firstBtn.addEventListener("click", function(event){
//     console.log(this.textContent) // My Button 1
//     console.log(event) // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
//     console.log(event.target) // <button id="one">My Button 1</button>
//     console.log(event.target.textContent) //     one">My Button 1
// })



// now for all buttons 

//  const allButtons = document.querySelectorAll(".myButtons button")
//  console.log(allButtons) // NodeList(3) [button#one, button#two, button#three]

//  for (let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this.textContent)
//     })
//  }

// for arrow function 

//  const allButtons = document.querySelectorAll(".myButtons button")
//  console.log(allButtons) // NodeList(3) [button#one, button#two, button#three]

//  for (let button of allButtons){
//     button.addEventListener("click", ()=>{
//         console.log(this.textContent) // undefined for all buttons 
//     })
//  }

 // we can use the event that browser is offering 



  const allButtons = document.querySelectorAll(".myButtons button")
 console.log(allButtons) // NodeList(3) [button#one, button#two, button#three]

 for (let button of allButtons){
    button.addEventListener("click", (event)=>{
        console.log(event.target) 
        console.log(event.target.textContent) //  
        console.log(event.currentTarget) //  
    })
 }

 // target  >> kis element ne event ko trigger kiya
 // currentTarger >> kis element(button) pr hm ne eventListener attach kiya 