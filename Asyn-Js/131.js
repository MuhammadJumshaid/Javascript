// 20260120 / 21
// setInterval
// setInterval is used to run a function repeatedly after a fixed time interval (in milliseconds).

// // clearInterval also gives us an id , just like setInterval from which we can clear the setInterval

// console.log("script Start!!!")

// setInterval(()=>{
//    console.log("Alhamdulillah")
// }, 1000)

// console.log("script end !!!")



// console.log("script Start!!!")

// setInterval(()=>{
//    for(i=0; i<100000000; i++){
//       continue;
//    }
//    console.log(Math.random())
// }, 1000)

// console.log("script end !!!")

// console.log("script Start!!!")

// setInterval(()=>{
//    let total = 0;
//    for(i=0; i<100000000; i++){
//       total += i;
//    }
//    console.log(Math.random())
// }, 1000)

// console.log("script end !!!")




// Stop watch  start

// const startCount = document.querySelector(".start")
// const totalCount = document.querySelector(".count")
// const stopCount = document.querySelector(".stop")
// let count = 0;
// let intervalId;
// startCount.addEventListener("click", ()=>{

//    intervalId = setInterval(()=>{
//         count ++;
//         totalCount.innerText = count
//     },1000 )
// })
// stopCount.addEventListener("click",()=>{
//     clearInterval(intervalId)
// })

// Stop Watch end

// const btn = document.querySelector("button")
// console.log(btn)

// const body = document.body
// console.log(body)

// body.addEventListener("click", ()=>{
//    setInterval(()=>{
// const red = Math.floor( Math.random() * 126)
// const green = Math.floor( Math.random() * 126)
// const blue = Math.floor( Math.random() * 126)
// const rgb = `rgb(${red}, ${green}, ${blue})`
// console.log(rgb)
// body.style.background = rgb
// },1000)
// })
// bgColor change

const button = document.querySelector("button")

const body = document.body

const intervalId = setInterval(() => {
   const red = Math.floor( Math.random() * 126)
   const green = Math.floor( Math.random() * 126)
   const blue = Math.floor( Math.random() * 126)
   const rgb =`rgb(${red}, ${green}, ${blue})`
   console.log(rgb)
   body.style.background = rgb
}, 1000);

button.addEventListener("click",()=>{
   clearInterval(intervalId)
   button.textContent = body.style.background
}
)
