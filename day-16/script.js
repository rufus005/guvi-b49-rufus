function readBack(callback) {
    console.log("let's start reading the book...");
    setTimeout(() => {
        console.log("Finished reading the book!..");
        callback();
    },2000);
}

function afterReading(){
    console.log("Let's go to the play")
}
readBack(afterReading);

// function walk(){
//     console.log("walking")
//     return()
// }

// function run (){
//     console.log("running")
//     setTimeout(() => {
//         console.log("setTime");
//     },2000)
// rest();
// }

// function rest (){
//     console.log("resting")
// }

// walk ();

// console.log("let's start the count")
// setTimeout(()=> {
//     console.log("3 time finished")
//     setTimeout(()=> {
//         console.log("2 time finished")
   
//     setTimeout(()=> {
//         console.log("1 time finished")

//         console.log("happy new year")
//     },1000)
//   },2000)
// },3000)


function casual () {
console.log("wake upt at 6 pm")

setTimeout(()=> {
    console.log("washing the wessel")
},2000)
}

function asusual() {
    console.log("cooking the meals")
}