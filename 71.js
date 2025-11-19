// 20251119 

// methods 
// methods are the functions inside object

// this keyword 

// const person =  {
//     firstName : "Jumshaid",
//     age : 12,
//     about : function(){
//         console.log("person name is Jumshaid and person age is 12")
//     }
// }
// console.log(person.about)  // ƒ (){console.log("person name is Jumshaid and person age is 12")}


    // console.log(person.about()) // person name is Jumshaid and person age is 12


    // to access the object properties dynamically in the method (using template string)

    

//  with errors 
    
// const person =  {
//     firstName : "Jumshaid",
//     age : 12,
//     about : function(){
//         console.log(`person name is ${firstName} and age is ${age}  `) 
//     }
// }
// console.log(person.about()) //71.js:38 Uncaught ReferenceError: firstName is not defined




// const person =  {
//     firstName : "Jumshaid",
//     age : 12,
//     about : function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}  `)
//     }
// }
// console.log(person.about()) // person name is Jumshaid and age is 12  




// this ??

// the value of this keyword will be calculated on the runtime

// in a function , the value of this will be that object who is calling that 
// now in the above example 

// person is calling the about function , so the value of this will be person object  (person.about())


// this = object 




// const person =  {
//     firstName : "Jumshaid",
//     age : 12,
//     about : function(){
//         console.log(this)  // {firstName: 'Jumshaid', age: 12, about: ƒ}
//     }
// }
// console.log(person.about()) 
// console.log(this) // window object >>   // Window {window: Window, self: Window, document: document, name: '', location: Location, …}



 function personInfo(){
        console.log(`person name is ${this.firstName} and age is ${this.age}  `)
    }


const person1 =  {
    firstName : "Jumshaid",
    age : 12,
    about : personInfo   
   
}
console.log(person1.about())   // person name is Jumshaid and age is 12 

const person2 =  {
    firstName : "Jimi",
    age : 15,
    about : personInfo  
   
}
console.log(person2.about())  // person name is Jimi and age is 15 

const person3 =  {
    firstName : "Fatima",
    age : 19,
    about : personInfo  
   
}
console.log(person3.about())   // person name is Fatima and age is 19 


