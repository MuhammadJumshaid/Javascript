// 20260130 

// Error handling in xhr

//  const url = "https://jsonplaceholder.typicode.com/postsss"// error 404
// const url = "https://jsonplaceholder.typicode.com/posts"


// const xhr = new XMLHttpRequest()

// xhr.open("GET",url )

// xhr.onload = function(){
//     if(xhr.status>=200 && xhr.status<300){
//         const data = JSON.parse(xhr.response)
//         console.log(data)
//      console.log("ok")   
//     }
//     else{
//     console.log("something went wrong")
//     console.log("disable cashe memory then try again")
//     }
// }

// // if not connected with the internet

// xhr.onerror = function(){(console.log("pelese check your internet connection"))}

// xhr.send()



// if from the url we have to fech data by id or some other data we have to do the same work again after getting daat by this url


const url = "https://jsonplaceholder.typicode.com/posts"
// const url2 = "https://jsonplaceholder.typicode.com/posts/4"


const xhr = new XMLHttpRequest()

xhr.open("GET",url )

xhr.onload = function(){
    if(xhr.status>=200 && xhr.status<300){
        const data = JSON.parse(xhr.response)
        console.log(data)
        console.log(data[3].id) // 4
        const urlId = data[4].id
        const url2 = `${url}/${urlId}`
        console.log(url2) // tps://jsonplaceholder.typicode.com/posts/5
        const xhr2 = new XMLHttpRequest()
        xhr2.open("GET", url2)
        xhr2.onload = ()=>{
            if(xhr2.status>= 200 && xhr2.status<= 300){
                const databyId = JSON.parse(xhr2.response)
                console.log(databyId) // {userId: 1, id: 5, title: 'nesciunt quas odio', body: 'repudiandae veniam quaerat sunt sed\nalias aut fugi…sse voluptatibus quis\nest aut tenetur dolor neque'}
            }
        }
        xhr2.send()

     

        
     console.log("ok")   
    }
    else{
    console.log("something went wrong")
    console.log("disable cashe memory then try again")
    }
}

// if not connected with the internet

xhr.onerror = function(){(console.log("pelese check your internet connection"))}

xhr.send()