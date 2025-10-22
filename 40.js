// 20251022 

// Spread Operator 

// For Clonning

// Revising Array 

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]

// const newArr = [...arr1, ...arr2]
// console.log(newArr);  // [1, 2, 3, 4, 5, 6]

// const newArr = [...arr1, arr2]
// console.log(newArr); // [1, 2, 3, [4, 5, 6]]
// console.log(newArr.length); // 4

// Strings Are iteratable , we can iterate a string like the follwing 

// const strArr = [..."Jumshaid"]
// console.log(strArr); //  ['J', 'u', 'm', 's', 'h', 'a', 'i', 'd']


// Numbers are not iteratable 

// const numArr = [...12345677]
// console.log(numArr); // error >> 12345677 is not iterable


// const numArrStr = [..."12345677"]
// console.log(numArrStr); // ['1', '2', '3', '4', '5', '6', '7', '7']



// Spread Operatro (In Objects )

// Note >> In object the same key(properties) cannot be more than on time , if it is the last key will override the first key

// let obj = {
//     key1 : "vlaue1",
//     key2 : "value2",
//     key1 : "value3",
// }

// console.log(obj); // {key1: 'value3', key2: 'value2'}
// 



// let obj1 = {
//     key1 : "vlaue1",
//     key2 : "value2",
// }
// let obj2 = {
//     key3 : "vlaue3",
//     key4 : "value4",
// }

// const newObj = {...obj1, ...obj2}
// console.log(newObj); // {key1: 'vlaue1', key2: 'value2', key3: 'vlaue3', key4: 'value4'}





// let obj1 = {
//     key1 : "vlaue1",
//     key2 : "value2",
// }
// let obj2 = {
//     key1 : "Unique Value",
//      key3 : "vlaue3",
//     key4 : "value4",
// }

// const newObj = {...obj1, ...obj2}
// console.log(newObj); // {key1: 'Unique Value', key2: 'value2', key3: 'vlaue3', key4: 'value4'}




// let obj1 = {
//     key1 : "vlaue1",
//     key2 : "value2",
// }
// let obj2 = {
//     key1 : "Unique Value",
//      key3 : "vlaue3",
//     key4 : "value4",
// }

// const newObj = {...obj2, ...obj1}
// console.log(newObj);  // {key1: 'vlaue1', key3: 'vlaue3', key4: 'value4', key2: 'value2'}




// let obj1 = {
//     key1 : "vlaue1",
//     key2 : "value2",
// }
// let obj2 = {
//     key1 : "Unique Value",
//      key3 : "vlaue3",
//     key4 : "value4",
// }

// const newObj = {...obj2, ...obj1, newKey : "newKeyValue"}
// console.log(newObj)  // {key1: 'vlaue1', key3: 'vlaue3', key4: 'value4', key2: 'value2', newKey: 'newKeyValue'}




// const obj = { ..."123"}
// console.log(obj);  // {0: '1', 1: '2', 2: '3'}


// const strObj = {..."abc"}
// console.log(strObj); // {0: 'a', 1: 'b', 2: 'c'}



// const arrObj = {...["item1", "item2"]}
// console.log(arrObj); // {0: 'item1', 1: 'item2'}


// const arrObj = {...["item1", "item2","item3"]}
// console.log(arrObj); // {0: 'item1', 1: 'item2', 2: 'item3'}


const checkChar = {..."abcdefgjhijklmnopqrstuvwxyz"}
console.log(checkChar);  //  {0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'j', 8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z'}

