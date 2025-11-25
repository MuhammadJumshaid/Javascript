// 20251125

// Improving code 





// Problem


// OOP 
// working on deficiencies 




// const userMethods = {
// about  : function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     hello : function(){
//         return "Hi, How are you"
//     }

   
// }

// function createUser(firsName, lastName , email, age, address){
// const user = {};

// user.firstName = firsName;
// user.lastName = lastName;
// user.email = email;
// user.age = age;
// user.address = address;
// user.about = userMethods.about
// user.is18 = userMethods.is18
// user.Hi = userMethods.hello
//  return user
// }
// // now we will just call the function and pass the values of user 

// const user2 =  createUser("Muhammad", "Jumshaid" , "jimi@gmail.com", 12 , "abd address")
// const user3 =  createUser("Muhammad", "Shahzaid" , "zebi@gmail.com", 22 , "efg address")
// const user4 =  createUser("Fatima", "Zahra" , "zahra@gmail.com", 6 , "xyz address")


// const aboutUser4 =  user4.about()
// console.log(aboutUser4) // Fatima is 6 years old

// console.log(user4.Hi()) // Hi, How are you




// if we have thousends of methods in the userObject we have to create all the functions in the userMehtods(other object) and pass the reference of the object 

// problem (mistakenly we pass the refrence of different functions)
// before the solution learn about [[prototype]] (refrence file No 80)
// solution 



// now we will create the object in other way


// const userMethods = {
// about  : function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     hello : function(){
//         return "Hi, How are you"
//     }

   
// }

// function createUser(firsName, lastName , email, age, address){
// const user = Object.create(userMethods);

// user.firstName = firsName;
// user.lastName = lastName;
// user.email = email;
// user.age = age;
// user.address = address;
//  return user
// }
// // now we will just call the function and pass the values of user 

// const user2 =  createUser("Muhammad", "Jumshaid" , "jimi@gmail.com", 12 , "abd address")
// const user3 =  createUser("Muhammad", "Shahzaid" , "zebi@gmail.com", 22 , "efg address")
// const user4 =  createUser("Fatima", "Zahra" , "zahra@gmail.com", 6 , "xyz address")


// const aboutUser4 =  user4.about()
// console.log(aboutUser4) // Fatima is 6 years old

// console.log(user4.hello()) // Hi, How are you

// console.log(user4.is18()) // false
 



// now we can create as much as function(in other object) and we dont need to pass their refrence



// 20251125

// in the above code we have a function and we have an object in which we have different methods , we have been created relationshipt b/w them as 
// when we have object like this    const user = Object.create(userMethods);
// js was cheking that if a thing is not present in the function then it checks it in the object named userMethod(in this example)(set --proto-- property)

// now 

// as we know that in js functions has it property prototype (empty object)
// so why we are creating extra work creating other objects
// we can add methods in the functions objects(prototype)
// lets do it






function createUser(firsName, lastName , email, age, address){
// const user = Object.create(userMethods);
const user = Object.create(createUser.prototype);
user.firstName = firsName;
user.lastName = lastName;
user.email = email;
user.age = age;
user.address = address;
 return user
}


// console.log(createUser.prototype) // {}

createUser.prototype.about = function(){ console.log(`my Name is ${this.firstName} ${this.lastName} and my Age is ${this.age}`) }


createUser.prototype.is18 = function(){   return this.age >= 18;}


 

const user2 =  createUser("Muhammad", "Jumshaid" , "jimi@gmail.com", 12 , "abd address")

const user3 =  createUser("Muhammad", "Shahzaid" , "zebi@gmail.com", 22 , "efg address")


const user4 =  createUser("Fatima", "Zahra" , "zahra@gmail.com", 6 , "xyz address")


user2.about() // my Name is Muhammad Jumshaid and my Age is 12

user4.about() // my Name is Fatima Zahra and my Age is 6


console.log(user2.is18())  // false
result =  user3.is18()
console.log(result) // true




// now lets write diff b/w -- proto-- and prototype

// in js  --proto-- or [[prototype]] is the reference of any object with which we are going to create a chining (chain) whild on the other hand prototype is an empty object that is freely offerd (given) by function