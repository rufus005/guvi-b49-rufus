function performCalculator(operator) {
    const num1 = 10;
    const num2 = 20;

    let result;

    switch (operator) {
        case:"add"
        result = num1 + num2 ;
        break;
        case:"sub"
        result = num1 + num2 ;
        break;
        case:"mul"
        result = num1 + num2 ;
        break;
        case: "div";
        result = num1 / num2;
        break;
        default:
            result ="invald operator"
        
    }
    alert(result)
}
 performCalculator("add")