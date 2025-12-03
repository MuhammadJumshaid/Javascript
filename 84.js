 // 20251203

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


// user2.about() // my Name is Muhammad Jumshaid and my Age is 12

// user4.about() // my Name is Fatima Zahra and my Age is 6


// console.log(user2.is18())  // false
// result =  user3.is18()
// console.log(result) // true


// for (let keys in user2){
//     console.log(keys) // all the keys including prototypes
// }

// but i want the key of only specific object , for this we use hasownproperty


for (let key in user2){
    if(user2.hasOwnProperty(key)){
        console.log(key) // kews in user2 
    }
}