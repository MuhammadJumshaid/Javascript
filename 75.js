// 20251122



// Arrow function (this)
// this in case of arror function
// you cannot change the value of this incase of arrow function
// arrow functions don't have thier own this 
// arrow function takes the value of this fron its surroundig(one step up)



// const user1 = {
   
//     firsName :  'jumshaid',
//     age : 12,
//     about :function(){
//      console.log(this) // {firsName: 'jumshaid', age: 12, about: ƒ}
//         console.log(this.firsName , this.age) //  Jumshaid 12
//     }
// }

// user1.about() // Jumshaid 12



// now with arror function



// const user1 = {
   
//     firsName :  'jumshaid',
//     age : 12,
//     about : ()=>{
//      console.log(this) // window object
//         console.log(this.firsName , this.age)  // undefined undefined
//     }
// }

// user1.about() // undefined undefined



// const user1 = {
   
//     firsName :  'jumshaid',
//     age : 12,
//     about :function(){
//      console.log(this) // {firsName: 'jumshaid', age: 12, about: ƒ}
//         console.log(this.firsName , this.age) //  Jumshaid 12
//     }
// }

// user1.about.call(user1) // Jumshaid 12


// const user1 = {
   
//     firsName :  'jumshaid',
//     age : 12,
//     about : ()=>{
//      console.log(this) // window object
//         console.log(this.firsName , this.age)  // undefined undefined
//     }
// }

// user1.about.call(user1) // undefined undefined


