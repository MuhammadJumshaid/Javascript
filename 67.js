


// the above arrays are different three different arrays in the memory(each has its unique address in the memory)// 20251109

// Sets (it is iterable)
// Set is like array but have some differences 
// store data
// sets also have its own method
// no index-basec access
// order is not guaranted (due to no indexs)
// unique items only (no dublicate allows )
 


// Method to create set
// const numbers = new Set()
 

// const numbers = new Set([1,2,3])
// console.log(numbers) //  >Set(3) {1, 2, 3}
// console.log(numbers[0]) // undefined


// const numbers = new Set("Jumshaid")
// console.log(numbers) //  >Set(8) {'J', 'u', 'm', 's', 'h', …}


// const numbers = new Set([1,2,3,6,8,2,1,6])
// console.log(numbers) // Set(5) {1, 2, 3, 6, 8}


// const numbers = new Set()
// console.log(numbers) // Set(0) {size: 0}

// const numbers = new Set()
// console.log(numbers) // Set(0) {size: 0}
// numbers.add(1)
// console.log(numbers) // Set(1) {1}
// numbers.add(2)
// console.log(numbers) // Set(2) {1, 2}
// numbers.add(2)
// console.log(numbers) // Set(2) {1, 2} 

// numbers.add("5,4,3,2")
// console.log(numbers) // Set(3) {1, 2, '5,4,3,2'}
// numbers.add(5,6,7,4,3,2)
// console.log(numbers) // Set(4) {1, 2, '5,4,3,2', 5}

// // now adding array in the set 
// const myArr = ["item1", "item2"]
// numbers.add(myArr)
// console.log(numbers) // Set(5) {1, 2, '5,4,3,2', 5, Array(2)}
// numbers.add(myArr)
// console.log(numbers) // Set(5) {1, 2, '5,4,3,2', 5, Array(2)}




//  const myArr = ["item1", "item2"]



// const numbers = new Set()
// numbers.add(myArr)
// console.log(numbers) // Set(1) {Array(2)}

// numbers.add(myArr)
// console.log(numbers) // Set(1) {Array(2)}
// numbers.add(myArr)
// console.log(numbers) // Set(1) {Array(2)}


// Find(Check the element a set contains )

// const mySet = new Set([1,2,4,5,6,6])
// console.log(mySet) // Set(5) {1, 2, 4, 5, 6}


// console.log( mySet.has(1))  // true

// if(mySet.has(6)){
//     console.log("6 is present ") // 6 is present 
// }
// else {
//     console.log("6 is not present")
// }



// if(mySet.has(3)){
//     console.log("3s is present ") // 
// }
// else {
//     console.log("3 is not present") // 3 is not present
// }


// Set is iterable (on which we can apply for of loop)

// const mySet = new Set()
// mySet.add(["item1", "item2"])
// mySet.add(1)
// mySet.add(2)
// mySet.add(3)
// mySet.add(4)
// mySet.add(5)
// mySet.add(6)


// for (let item of mySet){
//     console.log(item) //  (2) ['item1', 'item2']    1   2   3   4   5    6
// }


// When to use set >> when we have uniqte vlues i.e Ids

// const Ids = new Set()

const myNumbers = [1,2,4,4,5,6,5,6]
const uniqueSet = new Set(myNumbers)
console.log(uniqueSet) // Set(5) {1, 2, 4, 5, 6}
console.log(myNumbers)  // (8) [1, 2, 4, 4, 5, 6, 5, 6]
console.log(uniqueSet.length) // undefined
console.log(myNumbers.length)  // 8

// Task >> find the length of unqueSet

let length = 0;
for(let item of uniqueSet){
    length ++
}
console.log(length) // 5 