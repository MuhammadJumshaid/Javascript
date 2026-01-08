// 20260108 

// loop

// getElementByTag
//  let navItems = document.getElementsByTagName("a")
//  console.log(navItems) // HTMLCollection(3) [a, a, a]
//  console.log(navItems[1]) // <a href>Todo</a>




// changing color of all a tags
//  let navItems = document.querySelectorAll(".nav-itme")
//  let navItems = document.getElementsByClassName("nav-itme")
// console.log(navItems) // htmlCollection

// simple for loop ,
// for of loop 
// foreach loop (can't apply on html collection)

// for (var i = 0 ; i <= navItems.length ; i++){
//     // console.log(navItems[i])
//     const navItem = navItems[i];
//     navItem.style.color = "blue"; // this will not be applied because "nav-itme" class is not directly inside li tag its inside a tag , this will work when we fetch it with getElementsbyTagName
//     navItem.style.backgroundColor = "yellow";
//     navItem.style.padding = "10px 20px";
//     navItem.style.fontWeight = "bold";
//     console.log(navItem)
// }

// now with for of loop 

// for (var item of navItems){
//    item.style.background = "green"
// }

// now with forEach method 

// navItems.forEach((item) => {
//        item.style.background = "green" // error >>  navItems.forEach is not a function

// });


// we can change html collection in an array  

// navItems =  Array.from(navItems)
// console.log(navItems) //  (3) [a, a, a]
// // to chek 
// console.log(Array.isArray(navItems)) //  true

// // now we can apply foreach loop on it 

// navItems.forEach((item) => {
//        item.style.background = "green" 

// });



// now with document.querySelectorAll()

 let navItems = document.querySelectorAll("a")
 console.log(navItems) // NodeList(3) [a, a, a]

 // no nodelist we can use all these three loops 
// simple for loop ,
// for of loop 
// foreach loop 

// for (var i = 0 ; i<navItems.length ; i++){
//     console.log(navItems[i])
//     const myitems = navItems[i];
//     myitems.style.background = "blue"
// }


// for(var item of navItems){
//     item.style.background  = "red"
// }

// navItems.forEach((item)=>{
// item.style.color = "orange"
// })


// we can also change nodlist into array

navItems = Array.from(navItems)
console.log(navItems) // (3) [a, a, a]
console.log(Array.isArray( navItems)) // true