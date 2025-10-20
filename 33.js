// For Of Loop(iterate in array)


// const fruits = ["Apple", "Mango", "Banana", "Melon"]
// for(let fruit of fruits){
//     console.log(fruit);
// }

// const fruits = ["Apple", "Mango", "Banana", "Melon"]
// for(let fruit of fruits){
//     console.log(fruit.toUpperCase());
// }

const fruits = ["Apple", "Mango", "Banana", "Melon"]
const fruits2 = [];
for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);