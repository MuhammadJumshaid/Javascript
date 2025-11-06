// 20251106

// fill Method 
// value , start , ene
// fill method is used to fill the array by given number 

// const myArr = new Array(10).fill(-1)
// console.log(myArr) // [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
 

// const myArr = [1,2,3,4,5,6,,7,8,9]

//  const result = myArr.fill("jimi",3,5 ) // 5 not included 
//  console.log(result) // [1, 2, 3, 'jimi', 'jimi', 'jimi', empty, 7, 8, 9]


const myArr = [1,2,3,4,5,6,7,8,9]

const result = myArr.fill("jimi", 4)
console.log(result) // [1, 2, 3, 4, 'jimi', 'jimi', 'jimi', 'jimi', 'jimi']


