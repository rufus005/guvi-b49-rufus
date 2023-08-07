function promiseCalculator (operator) {
    const rufus = Number(document.getElementById("sam").value);
    const pragadee = Number(document.getElementById("sam1").value);

    let result;

    switch (operator) {
        case "add":
            result = rufus + pragadee
            break;
        case "sub":
            result = rufus - pragadee
            break;
          case "mul":
            result = rufus * pragadee
            break;
        case "sub":
            result = rufus / pragadee
            break;  
        default : 
        result = "invalid Operator";
            
    }
//  alert(result)
document.getElementById("result").innerText = result
}
// promiseCalculator("add");
