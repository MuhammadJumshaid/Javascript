// 20251115 

// Clonning  using object.assing

// we have already covered objcet clonning using spread operator , let reacap

// Heap memory 

// const obj1 = {key1 : "value1", key2 : "value2"}
// console.log(obj1) // {key1: 'value1', key2: 'value2'}

// const obj2 = obj1 


// console.log(obj2) // {key1: 'value1', key2: 'value2'}

// working >> the obj1 actual array is in the heap memory , its address will be stored in the the obj1 , the same address we assighed in the obj2 as,  const obj2 = obj1  
// when we added new value in the array (obj1 address point to that array also address 2) as both array point the same array , so the array will be same 
// to avoid changes in the obj 2 we use spread operator and object.assign method 
// object.assign method is old, spread operator is new 

// // if we add a new value in obj1 this will be also adding abj2

// obj1.key3 = "value3"

// console.log(obj1)  // {key1: 'value1', key2: 'value2', key3: 'value3'}
// console.log(obj2) // {key1: 'value1', key2: 'value2', key3: 'value3'}

// Question ? >> if we add value it should not be added in the obj2 (clonning)>> creating a new object in the memory

// using spread operator 


// const obj1 = {key1 : "value1", key2 : "value2"}
// console.log(obj1) // {key1: 'value1', key2: 'value2'}



// const obj2 = {...obj1} 

// console.log(obj2) // {key1: 'value1', key2: 'value2'}

// obj1.key3 = "value3"  
// console.log(obj1)   //   {key1: 'value1', key2: 'value2', key3: 'value3'}
// console.log(obj2)  //   {key1: 'value1', key2: 'value2'}





// now using object.assign method 


const obj1 = {key1 : "value1", key2 : "value2"}
console.log(obj1) // {key1: 'value1', key2: 'value2'}


const obj2 = Object.assign({}, obj1)
obj1.key3 = "value3" 
console.log(obj1) // {key1: 'value1', key2: 'value2', key3: 'value3'}
console.log(obj2) // {key1: 'value1', key2: 'value2'}



