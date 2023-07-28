// function operator(a,b) {
//     try {
//         if (b > a) {
//             throw new Error("B is greater then A!!")// Custom error
//         }
//         const result = a - b
//         console.log("Result: ", result)
//     } catch (err) {
//         console.log("Error occured: ", err);
//     }
// }
// operator(10,20)


function addition (a,b){
    try {
        if(a > b){
            throw new Error("A is greater than b!!") //custom error
        }
        const result = a - b
        // console.log(result);
    } catch (err) {
        console.log("Error: ",err)
    }
}

addition(20,5)