20251122/23

// OOP 
// working on deficiencies 


// function createUser(firsName, lastName , email, age, address){
// const user = {};

// user.firstName = firsName;
// user.lastName = lastName;
// user.email = email;
// user.age = age;
// user.address = address;
// user.about = function(){
//         return `${this.firstName} is ${this.age} years old`
//     };
//     user.is18 = function(){
//         return this.age >= 18;
//     }

//     return user
// }

// // now we will just call the function and pass the values of user 

// const user2 =  createUser("Muhammad", "Jumshaid" , "jimi@gmail.com", 12 , "abd address")
// const user3 =  createUser("Muhammad", "Shahzaid" , "zebi@gmail.com", 22 , "efg address")
// const user4 =  createUser("Fatima", "Zahra" , "zahra@gmail.com", 6 , "xyz address")


// console.log(user2)
// const is18 = user2.is18()
// console.log(is18) // false
// console.log(user3)
// const is182 = user3.is18()
// console.log(is182) // true
// console.log(user4)


// const about = user2.about()
// console.log(about) // Muhammad is 12 years old


// in the above example the functions(methods) are inside object  
// if we create millions of users then milling of function will be created and they take memory 
// for this we will create a new object inside that object we will define our functions  and pass the reference of that  object .




const userMethods = {
about  : function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18 : function(){
        return this.age >= 18;
    }

   
}






function createUser(firsName, lastName , email, age, address){
const user = {};

user.firstName = firsName;
user.lastName = lastName;
user.email = email;
user.age = age;
user.address = address;
user.about = userMethods.about
user.is18 = userMethods.is18
 return user
}
// now we will just call the function and pass the values of user 

const user2 =  createUser("Muhammad", "Jumshaid" , "jimi@gmail.com", 12 , "abd address")
const user3 =  createUser("Muhammad", "Shahzaid" , "zebi@gmail.com", 22 , "efg address")
const user4 =  createUser("Fatima", "Zahra" , "zahra@gmail.com", 6 , "xyz address")


const aboutUser4 =  user4.about()
console.log(aboutUser4) // Fatima is 6 years old

