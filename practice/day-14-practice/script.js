function rufusCalculation(operator) {
    const num1 =Number(document.getElementById("num1").value);
    const num2 =Number(document.getElementById("num2").value);

    let result ;

switch (operator) {
    case "add":
        result= num1 + num2;
        break;
        case "sub":
            result= num1 - num2;
        break;
        case "mul":
            result =num1 * num2;
        break;
        case "div":
            result= num1 / num2;
        break;
        default:
        result = "Invalid Number"

}

// alert(result);

document.getElementById("result").innerText =result;
}
// rufusCalculation(add)

const addition = document.getElementById("add");

addition.addEventListener("mouseover", function () {
    // console.log("click event:", event);
    // textElement.innerText = "mouseover";
    textElement.style.backgroundColor ="green";
     rufusCalculation("Add")
});
