// let a = 20;
// let b = 20;
// let c = a + b;
// debugger;
// console.log(c);

let sum  = bigInt(1);
for (let i=bigInt(1);<=30;i++){
    
    let val = sum * i 
    sum = bigInt(val)
    console.log(i,sum)
}