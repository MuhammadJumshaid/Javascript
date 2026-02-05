// 20260204 

// async await 

//  const URL = "https://jsonplaceholder.typicode.com/posts"


//  fetch(URL)
//  .then(response=>response.json())
//  .then(data=>console.log(data))


 
//  async function myFun(){
//  }

//  const whatisThis = myFun()
//  console.log(whatisThis) // Promise

//  async function always return a promise 
// also json() returned a promise 
// await keyword pauses the execution untill the promise is resolved, but as this is asyncrionous it does not the js execution

//  async function myFun(){
//   const response = await fetch(URL)
//   const data = response.json()
//   console.log("data", data)

//  }
//   myFun()

//  const whatisThis = myFun()
//  console.log(whatisThis) // Promise



 const URL = "https://jsonplaceholder.typicode.com/postssss" // for error
//  const URL = "https://jsonplaceholder.typicode.com/posts"
 async function myFun(){
   
  const response = await fetch(URL)
  if(!response.ok){
   throw new Error("Something went Wrong")
  }
  const data = await response.json()
  return data //  === return Promise.resolve(data);    >>   returned promise >> 
 } 
  myFun().then(data=>console.log(data))
  .catch((err)=>{
      console.log("inside catch")
      console.log(err)  
   })