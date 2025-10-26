// 20251026 

// Objects insides array
// very useful in real world applications


// let users = [{},{},{}] // Syntax 
let users = [
{
Id : 1, 
Name : "Jumshaid",
Gender : "Male"
},
{
Id : 2, 
Name : "Fatima",
Gender : "Female"
},
{
Id : 3, 
Name : "Jimi",
Gender : "Male"
}] 

// console.log(users); 
// console.log(users[0]); // {Id: 1, Name: 'Jumshaid', Gender: 'Male'}

for(let user of users){
    // console.log(user);
    // console.log(user.Id); 1 2  3
    console.log(user.Name); 

}