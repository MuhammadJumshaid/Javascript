// 20251020 
// For in Loop
// For in loop  iterate in array and gives the index of array

// const fruits = ["Banana", "Apple", "Mango", "Grapes"]
// for(let fruit in fruits){
//     console.log(fruit); // 0, 1 , 2 ,3 , 4
// }

// For Better understanding 


// const fruits = ["Banana", "Apple", "Mango", "Grapes"]
// for(let index in fruits){
//     console.log(index); // 0, 1 , 2 ,3 , 4
// }

const fruits = ["Banana", "Apple", "Mango", "Grapes"]
for(let index in fruits){
    console.log(fruits[index]); // Banana, Apple,Mango,Grapes
}


// Mostly we use for loop and for of loop(Also a new loop for each)