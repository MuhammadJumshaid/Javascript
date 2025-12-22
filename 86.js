// 20251222

// 2015  / es6  
// class keyword 
// classes are fake(internally we are doing the same work)

// previous work 


// function createUser(firsName, lastName , email, age, address){
// // const user = Object.create(userMethods);
// // const user = Object.create(createUser.prototype);


// this.firstName = firsName;
// this.lastName = lastName;
// this.email = email;
// this.age = age;
// this.address = address;
// //  return this
// }


// // console.log(createUser.prototype) // {}

// createUser.prototype.about = function(){ console.log(`my Name is ${this.firstName} ${this.lastName} and my Age is ${this.age}`) }


// createUser.prototype.is18 = function(){   return this.age >= 18;}


 

// const user2 =  new createUser("Muhammad", "Jumshaid" , "jimi@gmail.com", 12 , "abd address")

// const user3 = new createUser("Muhammad", "Shahzaid" , "zebi@gmail.com", 22 , "efg address")


// const user4 =  new createUser("Fatima", "Zahra" , "zahra@gmail.com", 6 , "xyz address")


// user2.about() // my Name is Muhammad Jumshaid and my Age is 12

// user4.about() // my Name is Fatima Zahra and my Age is 6


// console.log(user2.is18())  // false
// result =  user3.is18()
// console.log(result) // true


// work with classes

// syntax 
// class createUser{
// constructor(){

// }

// }



class createUser{
constructor(firsName, lastName , email, age, address){
    console.log("constructor called")
this.firstName = firsName;
this.lastName = lastName;
this.email = email;
this.age = age;
this.address = address;

}
is18(){   return this.age >= 18;}

about(){ console.log(`my Name is ${this.firstName} ${this.lastName} and my Age is ${this.age}`) }

myfun(a){
    console.log(a)
}
}


const user1 =  new createUser("Muhammad", "Jumshaid" , "jimi@gmail.com", 12 , "abd address")
console.log(user1)

const user2 = new createUser("Muhammad", "Shahzaid" , "zebi@gmail.com", 22 , "efg address")

// when we create object with new keyword our consturctor , without new keyword it will not be called
 // const user3 =   createUser("Muhammad", "Jumshaid" , "jimi@gmail.com", 12 , "abd address") // error >>  Class constructor createUser cannot be invoked without 'new'
  
 // constructor will be called as no of time as we create no of object 

 console.log(user1.firstName)  // Muhammad
 console.log(user1.is18())  // false
 console.log(user1.about())  // my Name is Muhammad Jumshaid and my Age is 12

 // check prototype

 console.log( Object.getPrototypeOf(user2)) // {is18: ƒ, about: ƒ.....}

 console.log(user1.myfun("Muhammad Jumshaid")) // Muhammad Jumshaid
