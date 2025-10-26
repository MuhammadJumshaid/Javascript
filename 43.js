// 20251026 

// Nested Destructuring

let users = [
{Id : 1, Name : "Jumshaid", Gender : "Male"},
{Id : 2, Name : "Fatima", Gender : "Female"},
{Id : 3, Name : "Jimi", Gender : "Male"
}] 

// Destructuring


 let [user1, user2, user3] = users
//  console.log(user1); // {Id: 1, Name: 'Jumshaid', Gender: 'Male'}
//  console.log(user3); // {Id: 3, Name: 'Jimi', Gender: 'Male'}

// Nested Destructurign 
// From the user1 i want only Name 

// let [{Name}] = users
// console.log(Name); // Jumshaid

// let [{Name : FirstName}] = users
// console.log(FirstName); // Jumshaid

let [{Id, Name : myName}, { }, {Name}] = users
console.log(Id); // 1
console.log(Name); // Jimi
console.log(myName); // Jumshaid
