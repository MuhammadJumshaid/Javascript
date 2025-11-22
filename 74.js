// 20251122


// const user1 = {
   
//     firsName :  'jumshaid',
//     age : 12,
//     about : function(){
    //   console.log(this)  // {firsName: 'jumshaid', age: 12, about: ƒ}
//         console.log(this.firsName , this.age)
//     }
// }

// user1.about()   // jumshaid 12


// 
// don't do the following mistakes

// const user1 = {
   
//     firsName :  'jumshaid',
//     age : 12,
//     about : function(){
//        console.log(this) // window object
//         console.log(this.firsName , this.age)
//     }
// }

//  const myFun = user1.about
// myFun() // undefined undefined



// Recape >> the value of this will be known when we call the method




//  const myFun = user1.about
// myFun() // undefined undefined

// this is something like this 


//  const myFun = function(){
//         console.log(this.firsName , this.age)
//     }

//     myFun() // undefined 


// for binding the value of this 


const user1 = {
   
    firsName :  'jumshaid',
    age : 12,
    about : function(){
       console.log(this) //{firsName: 'jumshaid', age: 12, about: ƒ}
        console.log(this.firsName , this.age)
    }
}

 const myFun = user1.about.bind(user1)
myFun() // jumshaid 12

