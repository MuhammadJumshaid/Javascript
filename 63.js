// 20251106 

// some Method
// Some method take a callback function , it will give  result in true or false as its function 
// some method is somehow like OR operatory , if any of the item matched the result wil be true 

// const myArr = [1, 5, 19, 23, 2, 35]

// const isEven = function(number){
//     return number %2===0
// }
// const result = myArr.some(isEven)
// console.log(result)



// const myArr = [1, 5, 19, 23, 2, 35]
// const result = myArr.some((number)=>number%2===0)
// console.log(result) // true


// const myArr = [1, 5, 19, 23, 11, 35]
// const result = myArr.some((number)=>number%2===0)
// console.log(result) // fasle


const userCart = [

    {ProductId : 1, ProductName : "Mobile", Price : 15000},
    {ProductId : 2, ProductName : "Laptop", Price : 30000},
    {ProductId : 3, ProductName : "Tv", Price : 1000000},
]


const result = userCart.some((user)=>user.Price>100000)
console.log(result) // true