// 20251104

// find Method (small f of find)
// This will take a callback function ,and gives us a new array
// This will give the ruslt of first accurance (same like if-else)


// const myArr = ["Hello", "Cat", "dog", "Lion"]

// const isLength3 = function(a){
// return a.length === 3;
// }

// const ans = isLength3("Jumshaid")
// console.log(ans) // false 
// const abc = isLength3("abc")
// console.log(abc) // true


// const result =  myArr.find(isLength3)
// console.log(result) // Cat


// const isLength12 = function(a){
// return a.length === 12;
// }

// const result =  myArr.find(isLength12)
// console.log(result) // undefined


// const isLength3 = function(a){
// return a.length === 3;
// }

// const result =  myArr.find((string)=>string.length==3)
// console.log(result) // cat


// Realistic Example 

const users = [
    {userId : 1, userName : "Jumshaid"},
    {userId : 2, userName : "Kamran"},
    {userId : 3, userName : "Zain"},
    {userId : 4, userName : "Jimi"},
    {userId : 5, userName : "Mubeen"},
    {userId : 6, userName : "Fatima"}
]

// Task >> find user whos userId is 4 

const result = users.find((user)=>user.userId===4)
console.log(result) // {userId: 4, userName: 'Jimi'}