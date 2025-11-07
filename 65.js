// 20251107 

// splice Method  
// Take three parameters >>  start delete  insert 

// index , No of items to delete, insert

// delete or insert elemnets in array
// this method will change the orignal array , and gives us the deleted or inserted elements as new array


// const myArr = ["item1", "item2", "item3"]
// console.log(myArr) // ['item1', 'item2', 'item3']
// // delete 

// const result = myArr.splice(1,1)
// // here in the parameter first 1 is the index , the second 1 is the number of items to delete
// console.log(myArr) // ['item1', 'item3']
// console.log(result) // deleted item >> ['item2']


// const myArr = ["item1", "item2", "item3"]
// console.log(myArr) // ['item1', 'item2', 'item3']

// Insert

// myArr.splice(1,0,"Jimi", "Jimi2")
// console.log(myArr) // ['item1', 'Jimi', 'Jimi2', 'item2', 'item3']


// insert and delete simultaneously(togather)

const myArr = ["item1", "item2", "item3"]
console.log(myArr) // ['item1', 'item2', 'item3']

const newArr = myArr.splice(2,1,"Item3_New")
console.log(myArr) // ['item1', 'item2', 'Item3_New']
console.log(newArr) // ['item3']