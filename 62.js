// 20251104

// every Method (e small of every)
// every mehtod will take a callback function and will return a boolean value (true or false) as its callback will return a boolean value)


// const myArr = [2,4,12,34,60]

// const isEven = function(num){
// return num % 2 ===0
// }

// const reslut = myArr.every(isEven)
// console.log(reslut) // true
// const result = myArr.every(number=>number%2==0)
// console.log(result) // true

// const myArr = [2,4,12,34,60]

// const result = myArr.every(number=>number%2==0)
// console.log(result) // true


// const myArr = [2,4,12,34,61]

// const result = myArr.every(number=>number%2==0)
// console.log(result) // false



// Realistic example

const userCart = [

    {ProductId : 1, ProductName : "Mobile", Price : 15000},
    {ProductId : 2, ProductName : "Laptop", Price : 30000},
    {ProductId : 3, ProductName : "Tv", Price : 10000},
]


//  Check every product price < 30000

// const result = userCart.every(product=>product.Price<30000)
// console.log(result) // false 

// Implicit Return >> Where i will not use ther return keyword
const result = userCart.every(product=>product.Price<=30000)
console.log(result) // true


