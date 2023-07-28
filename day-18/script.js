// // function asyncTask() {
// //     let promiseObj = new Promise((resolve,reject)=> {
// //         console.log("sucessful")
// //     })

// function asyncTask() {
//     return new Promise((resolve) => {
//         console.log("successful");
//         setTimeout(() => {
//             resolve('Hello World');
//         }, 2000);
//     });
// }

// //     return new Promise((resolve,reject) {
// //         setTimeout(() => {
// //             resolve('Hello World')
// //             }, 2000)
// //     });
// // }

// function asyncTask1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("task 1completesd")
//         },3000)
//     })
// }

// function asyncTask2 (){
//     return new Promise((reject)=>{
//         setTimeout(()=>{
//         reject("task2 not complete")
//         },2000)
//     })
// }

// asyncTask()
//  .then((val)=>{
//     console.log(val);
//     return asyncTask();
//  })
// .then((val)=>{
//     console.log(val)
//     return asyncTask1()
// })
// .then((val)=>{
//     console.log(val)
//     return asyncTask1()
// })
// .catch((error) => {
//     console.error(error); // Handle any rejected promise here.
// });


// Promise.all([asyncTask(),asyncTask1(),asyncTask2()])
// .then((val) =>{
//     console.log(val);
//     console.log("all tasks completed")
// })
// .catch((err) => {
//     console.log("error",err)
// })

// practice

// let promiseObj = new Promise(()=> {
//     resolve("SUCCESS!!");
//     });
    
//     promiseObj.then((val) => {
//       console.log(val);
// })

function asyncTask1 () {
    return  new Promise((resolve)=>{
        setTimeout(()=> {
            resolve("task 1 completed")
        },1000)
    })
}

function asyncTask2 () {
    return  new Promise((reject)=>{
        setTimeout(()=> {
            // resolve("task 2 completed")
            reject("task not completed")
        },2000)
    })
}
function asyncTask3 () {
    return  new Promise((resolve)=>{
        setTimeout(()=> {
            resolve("task 3 completed")
        },2000)
    })
}

asyncTask1()
.then((val) => {
    console.log(val);
    return asyncTask2()
})
.then((val)=>{
    console.log(val)
    return asyncTask3()
})
.then((val)=> {
    console.log(val)
    console.log("all task completed")
    console.log("one task not completed")
})

.catch((err) =>{
    console.log("Error",err)
})