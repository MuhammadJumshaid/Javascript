// 20251019 

// For Loop in Array

let arr = ["Banana", "Apple", "Mango", "Grapes"]

// Length property of array is the most important property 

console.log("length of arr", arr.length)
console.log(arr[0])

// for(let i = 0 ; i<arr.length; i++){
//     // console.log(i);
//     console.log(arr[i]);
// }

// for(let i = 0 ; i<arr.length; i++){
//     // console.log(i);
//     console.log(arr[i].toUpperCase());
// }


// other method uppercase 

let fruits = []
for(let i = 0 ; i<arr.length; i++){
    // console.log(i);
fruits.push(arr[i].toLocaleUpperCase())

}
console.log(fruits);


