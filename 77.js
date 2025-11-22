// 20251122 



// Object oriend Programming 

// exploring deficiencies

// const user1 = {
//     firstName : "Jumshaid",
//     lastName : "Jimi",
//     email : 'jimi@gmail.com',
//     age : 12,
//     address : "Mohallah sherani wala taunsa Sharif",
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }

// const aboutUser =  user1.about()
// console.log(aboutUser)  // Jumshaid is 12 years old


// this is working will , but what i have many users like this (million of users , so what (should we write like this for al the users >> no))

// we need to find out better approach for this

// we will create a function that will take the above data as input and  will return an object

// working

// function (that function create object)
// add key value pairs
// return that object


function createUser(firsName, lastName , email, age, address){
const user = {};

user.firstName = firsName;
user.lastName = lastName;
user.email = email;
user.age = age;
user.address = address;
user.about = function(){
        return `${this.firstName} is ${this.age} years old`
    };
    user.is18 = function(){
        return this.age >= 18;
    }

    return user
}

// now we will just call the function and pass the values of user 

const user2 =  createUser("Muhammad", "Jumshaid" , "jimi@gmail.com", 12 , "abd address")
const user3 =  createUser("Muhammad", "Shahzaid" , "zebi@gmail.com", 22 , "efg address")
const user4 =  createUser("Fatima", "Zahra" , "zahra@gmail.com", 6 , "xyz address")


console.log(user2)
const is18 = user2.is18()
console.log(is18) // false
console.log(user3)
const is182 = user3.is18()
console.log(is182) // true
console.log(user4)


const about = user2.about()
console.log(about) // Muhammad is 12 years old