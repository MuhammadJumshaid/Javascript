// 20251116 

// Optional Chaining(use of questuib mark(?))
// accessing the value from undefined will give us error , if we don't want to get error then we should use optional chainging (?)
//mostly used in nested (objects)


// const user = {
//     userId : 1,
//     userName : "Jumshaid",
//     otherDetail :{userAge : 12,userGender : "male"}
// }
// console.log(user.userName) // Jumshaid
// console.log(user.abc)  // undefined
// console.log(user.abc.def)  // error
// console.log(user.otherDetail) // {userAge: 12, userGender: 'male'}
// console.log(user.otherDetail.userGender) // male


// const user = {
//     userId : 1,
//     userName : "Jumshaid",
   
// }
// // console.log(user.otherDetail) // undefined
// // console.log(user.otherDetail.userGender) // error >>  Cannot read properties of undefined (reading 'userGender')


// console.log(user?.otherDetail) // undefined
// console.log(user?.otherDetail?.userGender) // undefined

// // working of (?)>> if user exists then it will proceed further , otherwise this will not move ahead and return undefined right here (if user not exists)


let user ;
console.log(user) // undefined


//console.log(user.firstName) //  Uncaught TypeError: Cannot read properties of undefined (reading 'firstName')
console.log(user?.firstName) // undefined
