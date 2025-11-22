// 20251123


// Problem


// OOP 
// working on deficiencies 




const userMethods = {
about  : function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18 : function(){
        return this.age >= 18;
    },
    hello : function(){
        return "Hi, How are you"
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
user.Hi = userMethods.hello
 return user
}
// now we will just call the function and pass the values of user 

const user2 =  createUser("Muhammad", "Jumshaid" , "jimi@gmail.com", 12 , "abd address")
const user3 =  createUser("Muhammad", "Shahzaid" , "zebi@gmail.com", 22 , "efg address")
const user4 =  createUser("Fatima", "Zahra" , "zahra@gmail.com", 6 , "xyz address")


const aboutUser4 =  user4.about()
console.log(aboutUser4) // Fatima is 6 years old

console.log(user4.Hi()) // Hi, How are you




// if we have thousends of methods in the userObject we have to create all the functions in the userMehtods(other object) and pass the reference to the object 

// problem (mistakenly we pass the refrece of differt functions)
// to check solution check out the next file
