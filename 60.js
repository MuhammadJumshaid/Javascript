// 20251103

// Sort Method

// char : ascii value


//   '0' : 48
//   '1' : 49
//   '2' : 50
//   '3' : 51
//   '4' : 52
//   '5' : 53
//   '6' : 54
//   '7' : 55
//   '8' : 56
//   '9' : 57



//   ':' : 58
//   ';' : 59
//   '<' : 60
//   '=' : 61
//   '>' : 62
//   '?' : 63
//   '@' : 64
// 



 
//  'A' : 65
//  'B' : 66
//  'C' : 67
//  'D' : 68
//  'E' : 69
//  'F' : 70
//  'G' : 71
//  'H' : 72
//  'I' : 73
//  'J' : 74
//  'K' : 75
//  'L' : 76
//  'M' : 77
//  'N' : 78
//  'O' : 79
//  'P' : 80
//  'Q' : 81
//  'R' : 82
//  'S' : 83
//  'T' : 84
//  'U' : 85
//  'V' : 86
//  'X' : 87
//  'Y' : 88
//  'W' : 89
//  'Z' : 90





//  '[' : 91
//  '\' : 92
//  ']' : 93
//  '^' : 94
//  '_' : 95
//  ''' : 96

 


//  'a' : 96
//  'b' : 98
//  'c' : 99
//  'd' : 100
//  'e' : 101
//  'f' : 102
//  'g' : 103
//  'h' : 104
//  'i' : 105
//  'j' : 106
//  'k' : 107
//  'l' : 108
//  'm' : 109
//  'n' : 110
//  'o' : 111
//  'p' : 112
//  'q' : 113
//  'r' : 114
//  's' : 115
//  't' : 116
//  'u' : 117
//  'v' : 118
//  'w' : 119
//  'x' : 120
//  'y' : 121
//  'z' : 122



//  '{' : 123
//  '/' : 124
//  '}' : 125


// Sort 
// unlike others array methods sort method will mutate(change) the orignal array(this will not us new array like others)
// 5, 9, 1200, 400, 3000
// 5, 9, 400, 1200, 3000 // Expected (Ascending Sort

// const numbers = [5, 9, 1200, 400, 3000]
// numbers.sort();
// console.log(numbers) // [1200, 3000, 400, 5, 9]

// Js will not condider these elements as numbers. js convert this [5, 9, 1200, 400, 3000],  as ["5", "9", "1200", "400", "3000"] (change into string)

// How strings are sortd ??
// to sort string we use ascii code (number)

// Now 
// Recape the above ascci values(numbers)

//   '0' : 48
//   '1' : 49
//   '2' : 50
//   '3' : 51
//   '4' : 52
//   '5' : 53
//   '6' : 54
//   '7' : 55
//   '8' : 56
//   '9' : 57

// Implemneting on the above array
//As in the dictionary , js will se the firtst character and sort by this 
// i.e in 1200 js will see only 1 and assing it ascii value 49 as in dictionalry english i.e in Ahmad , only see the the first alphabet A....

// ["5",    "9", "1200", "400", "3000"] 
// ["53", "57", "49", "52", "51" ]

// So js will sort these ascii value(numbers) ascending by default 

// ["49", "51", "52" , "53", "57"]


// // now assign there actual values 

// [1200, 3000, 400, 5, 9]



// Now let see the sting example 

// const myArr = ["Jumshaid","Zebi", "Ahmad", "Rizwan"]
// myArr.sort();
// console.log(myArr) // ['Ahmad', 'Jumshaid', 'Rizwan', 'Zebi'] >>as Expected 


// If we have capital alphabets(characters) in our array they will come first , Why??
// Because their ascii vlaue are less then lower alphabets 
// see example 

// const myArr = ["jumshaid","zebi", "ahmad", "rizwan", "ABC","Abc","Rizwan"]
// myArr.sort();
// console.log(myArr) // ['ABC', 'Abc', 'Rizwan', 'ahmad', 'jumshaid', 'rizwan', 'zebi'] 




// Now let again See numbers To Achieve our expected Output



// const numbers = [5, 9, 1200, 400, 3000]
// numbers.sort();
// console.log(numbers) // [1200, 3000, 400, 5, 9]

// Solution 

// Sort method can take a callback as input   (optional)


// const numbers = [5, 9, 1200, 400, 3000]
// numbers.sort((a,b)=>{
//     return a-b
// });
// console.log(numbers) // [5, 9, 400, 1200, 3000] >> our expected output


// How ??
// Explanation 
// lets take any tow numbers form the above array
// 1200 , 400 >> 
// 1200 = a, 400 = b
// Trick >> if a-b ---> Positive(geater than 0 ) , then b will be placed first
// 1200 - 400 ---> 800 (+ve) , so "b"(400) will be placed first
// if a-b >> -ve(less than 0) a will be paced first 
// 4-5 >> -1 (-ve) ---> 4 will be paced first 



// const numbers = [ 1200, 400]
// numbers.sort((a,b)=>{
//     return a-b
// });
// console.log(numbers) //  [400, 1200]


// For Descending order sort 


// const numbers = [5, 9, 1200, 400, 3000]
// numbers.sort((a,b)=>{
//     return b-a
// });
// console.log(numbers) // ) [3000, 1200, 400, 9, 5]



// Now lets see Realistic Example 

// in application 
// Price >> Low to High
// Price >> How to Low
// js Sorting Algorithm is used in this 


// const products = [

//     {ProductId : 1, ProductName : "Mobile", Price : 15000},
//     {ProductId : 2, ProductName : "Laptop", Price : 30000},
//     {ProductId : 3, ProductName : "Tv", Price : 1200},
//     {ProductId : 4, ProductName : "Camera", Price : 470},
//     {ProductId : 5, ProductName : "PC", Price : 25000},
// ]

// products.sort((a,b)=>{
// return a.Price - b.Price
// })

// console.log(products) // Sorted products by ascendign order 


// this is changing the whole product , if we want it should not change tho whole product 

// We can clone array 


const products = [

    {ProductId : 1, ProductName : "Mobile", Price : 15000},
    {ProductId : 2, ProductName : "Laptop", Price : 30000},
    {ProductId : 3, ProductName : "Tv", Price : 1200},
    {ProductId : 4, ProductName : "Camera", Price : 470},
    {ProductId : 5, ProductName : "PC", Price : 25000},
]

 const lowToHigh = products.slice(0).sort((a,b)=>{
return a.Price - b.Price
})
console.log(lowToHigh) 


// Now by descending order



 const highToLow = products.slice(0).sort((a,b)=>{
return b.Price - a.Price
})
console.log(highToLow) //

