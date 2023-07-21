function performCalculation(operator) {
    // const num1 =Number(document.getElementById("num1").value);
    // const num2 =Number(document.getElementById("num2").value);

    // const num1 = Number(prompt("please enter the value of number 1:"));
    // const num2 = Number(prompt("please enter the value of number 2:"));
    const num1 =Number(prompt("enter the value of the number of 1:"));
    const num2 =Number(prompt("enter the value of the number of 2:"));

    let result;

    switch (operator) {
      case "add":
        result =num1 + num2;
        break;
        case "sub":
         result =num1 - num2;
          break;
        case "mul":
        result =num1 * num2;
        break;
        case "div":
             result =num1 / num2;
             break;
            default:
                result ="invalid operator!!";
    }
    // alert(result);
    
    document.getElementById("result").innerText=result;
    
    const msg =confirm("Do you want to show the result??")
    if(msg) {
      document.getElementById("result").innerText = result;
    } else {
      document.getElementById("result").innerText ="Result can not be shown!!!"
    }

}


// setTimeout(() => {
//     console.log("this message will be looged after 2000 milleseconds")
// }, 2000);

// setInterval(() => {
//   alert("hi,how ar u")
// }, 2000);