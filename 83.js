// 20251203

// new keyword 
// constructor function(calling function using new keyword)

// Note  >> convention >> if we know that in future our function will be a constructor function(calling it with new key word) , it first letter (function name) will be start with capital letter (not myFun >> it should be MyFun )

// function myFun(firstName , age){
//     // this = {}
//     this.firstName = firstName
//     this.age = age
// }

// const result = new myFun("Jumshaid", 12)
// console.log(result) // object  >>  myFun {firstName: 'Jumshaid', age: 12}   


// new keyword 

// create empty object(nameds this)  >> this = {}
// return this



// function myFun(firstName , age){
//     this.firstName = firstName
//     this.age = age
// }

// myFun.prototype.about = function(){
//     console.log( `${this.firstName}, ${this.age}`)
// }

// const result = new myFun("Jumshaid", 12)
// console.log(result) 

// result.about()   // Jumshaid, 12


// // now lets syncronize the previous file code 








function createUser(firsName, lastName , email, age, address){
// const user = Object.create(userMethods);
// const user = Object.create(createUser.prototype);


this.firstName = firsName;
this.lastName = lastName;
this.email = email;
this.age = age;
this.address = address;
//  return this
}


// console.log(createUser.prototype) // {}

createUser.prototype.about = function(){ console.log(`my Name is ${this.firstName} ${this.lastName} and my Age is ${this.age}`) }


createUser.prototype.is18 = function(){   return this.age >= 18;}


 

const user2 =  new createUser("Muhammad", "Jumshaid" , "jimi@gmail.com", 12 , "abd address")

const user3 = new createUser("Muhammad", "Shahzaid" , "zebi@gmail.com", 22 , "efg address")


const user4 =  new createUser("Fatima", "Zahra" , "zahra@gmail.com", 6 , "xyz address")


user2.about() // my Name is Muhammad Jumshaid and my Age is 12

user4.about() // my Name is Fatima Zahra and my Age is 6


console.log(user2.is18())  // false
result =  user3.is18()
console.log(result) // true


