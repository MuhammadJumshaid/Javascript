// 20251020 

// use const for creating array

// const number = 23;
// number = 24;
// console.log(number); // Error >> Assignment to constant variable.


// but we can chnage array although created it with const 

// const fruit = ["Banana", "Apple", "Mango"]
// fruit.push("Grapes")
// console.log(fruit); // ['Banana', 'Apple', 'Mango', 'Grapes']

// when we created a variable of fruit , it stored an address not the array, our main array is stored in the heap memory (both has same address) , i.e fruit = 0x11 ,  ["Banana", "Apple", "Mango"] = 0x11, we are never changing the address of array , we just push new item in that address , its address change when we create the same variable 
// like 


// const fruit = ["Banana", "Apple", "Mango"]
// fruit = ["Banana", "Apple", "Mango", "Cherry"]

// console.log(fruit); // Assignment to constant variable.


// But in case of let we can do the same process . we can assign again 

// const fruit = ["Banana", "Apple", "Mango"]
// fruit = ["Banana", "Apple", "Mango", "Cherry"]

// console.log(fruit); // Assignment to constant variable.


// We should alawys use const when creating to avoid errors (Even we should use const when dealing with reference type)

