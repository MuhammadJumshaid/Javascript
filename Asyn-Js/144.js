// 20260204 

// async await 

 const URL = "https://jsonplaceholder.typicode.com/posts"


 fetch(URL)
 .then(response=>response.json())
 .then(data=>console.log(data))


 
 async function myFun(){
    fetch(URL)

 }