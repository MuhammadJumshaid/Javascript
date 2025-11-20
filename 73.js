// 20251120 

// Call , Apply and bind (methods)


// function hello(){
//     console.log("Hi, How are you!")
// }

// hello() // Hi, How are you!




// call



// function hello(){
//     console.log("Hi, How are you!")
// }

// hello.call() // Hi, How are you!



// const person = {
//     personName : "Jumshaid",
//     personAge : 12,
//     about : function(){
//         console.log(`person name is : ${this.personName} and person age is ${this.personAge}`)
//     }
// }


// person.about()



// const person1 = {
//     personName : "Jumshaid",
//     personAge : 12,
//     about : function(){
//         console.log(this.personName , this.personAge)
//     }
// }


// // person1.about(this)  // Jumshaid 12
// person1.about(this)  // Jumshaid 12



// const person2 = {
//     personName : "Ali",
//     personAge : 10,
   
// }


// person1.about.call(person2)  // Ali 10
// // here person2 is the value of this

// // when we are using call with a function we must provide the value of this 
// person1.about.call() // undefined undefined
// person1.about.call(person1) // Jumshaid 12



// now we have to use(borrow) the about function for person 2 , for this we will use call , apply and bind methods 





// now with parameters 



// const person1 = {
//     personName : "Jumshaid",
//     personAge : 12,
//     about : function(hobby, gender){
//         console.log(this.personName , this.personAge, gender, hobby)
//     }
// }


// const person2 = {
//     personName : "Ali",
//     personAge : 10,
   
// }


// person1.about.call(person2, "Pubg" , "Male") // Ali 10 Male Pubg





// now using a globale function 



//  function about(hobby, gender){
//         console.log(this.personName , this.personAge, hobby, gender)
//     }

// const person1 = {
//     personName : "Jumshaid",
//     personAge : 12,
   
// }

// const person2 = {
//     personName : "Ali",
//     personAge : 10,
   
// }


// about.call(person2, "Pubg" , "Male") // Ali 10 pubg Male
// about.call(person1, "abc" , "Male") // Jumshaid 12 abc Male







// apply

// apply is same as the call , but when we are passing argumnts to a function we pass list (array)




// function hello(){
//     console.log("Hi, How are you!")
// }

// hello.apply() // Hi, How are you!






//  function about(hobby, gender){
//         console.log(this.personName , this.personAge, hobby, gender)
//     }

// const person1 = {
//     personName : "Jumshaid",
//     personAge : 12,
   
// }

// const person2 = {
//     personName : "Ali",
//     personAge : 10,
   
// }


// // about.apply(person2, "Pubg" , "Male") // error >>  CreateListFromArrayLike called on non-object

// about.apply(person2, ["Pubg" , "Male"])  // Ali 10 Pubg Male
// about.call(person1, "abc" , "Male") // Jumshaid 12 abc Male




// bind 
// bind will return a function
// bind will work both for listed and  array arguments




 function about(hobby, gender){
        console.log(this.personName , this.personAge, hobby, gender)
    }

const person1 = {
    personName : "Jumshaid",
    personAge : 12,
   
}

const person2 = {
    personName : "Ali",
    personAge : 10,
   
}



// about.bind(person2, ["Pubg" , "Male"])   // nothing in the output
// about.bind(person1, "abc" , "Male")  // nothing in the output


const result2 = about.bind(person2, ["Pubg" , "Male"])   // nothing in the output
const result1 =  about.bind(person1, "abc" , "Male")  // // nothing in the output

result2()  // Ali 10 (2) ['Pubg', 'Male']
result1()  // Jumshaid 12 abc Male