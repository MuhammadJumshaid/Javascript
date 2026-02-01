// 20260201 

// Promisify xhr 

// const URL = "https://jsonplaceholder.typicode.com/posts"
const URL = "https://jsonplaceholder.typicode.com/ppposts " // for errrr

function sendRequest(method, url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url)
        
        xhr.onload = function(){
            if(xhr.status>=200 && xhr.status<=300){
                resolve(
                    // console.log(JSON.parse(xhr.response))    
                   xhr.response
                )
            }
            else{
                reject(new Error("something went wrong"))
            }
           
        }
        xhr.onerror = function(){
                console.log("error ! error!")
            }
        xhr.send()
    })
}

sendRequest("GET", URL)
  .then((res) => {
    // console.log(res);
    const data = JSON.parse(res);
    // console.log(data)
    return data;
  })
  // as we know that .then also resturn a resolve promise
  // if we not write here return , then it will return undefined autometically
  .then((data) => {
    // console.log(data)
    // console.log(data[3])
    // console.log(data[3].id) // 4
    const id = data[3]?.id; // 4
    return id;
  })
  .then((id) => {
    // console.log(id)
    const url = `${URL}/${id}`;
    console.log("urlwithId", url); // https://jsonplaceholder.typicode.com/posts/4
    
    return sendRequest("GET", url);
    // return url 
  })
  

//   .then((url) => {
//     console.log("wholeUrl", url);
    
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = function () {
//       if (xhr.status >= 200 || xhr.status <= 300) 
//         {
//         // const data2 =xhr.response;
//         // console.log("data2", data2);
//         // // return data2

//         Promise.resolve(xhr.response)   
//          }
//          else{
//             console.log("error")
//          }
         
//     };
//      xhr.send();
//   })
   .then((data)=>{
    console.log("data", data)
        const gg = JSON.parse(data)
        return gg
   })
   .then((hi)=>console.log(hi))
  .catch((err) => {
    console.log('errrrrr');   
    console.log(err)
  });