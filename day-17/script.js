let promiseObj = new Promise((resolve,reject)=>{
    console.log("promis is obj called")
    // resolve("item is available")
    reject("Item is not satisfied")
});

console.log(promiseObj);

promiseObj.then((val) =>{
    console.log("Order status ----", val);
},
(err) =>{
    console.log("Order status ----", err);

}
);