function calculate(operator) {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result;

    if (operator === "+") result = num1 + num2;
    else if (operator === "-") result = num1 - num2;
    else if (operator === "*") result = num1 * num2;
    else if (operator === "/") {
        result = num2 === 0 ? "Cannot divide by zero" : num1 / num2;
    }
    else if (operator === "%") result = num1 % num2;

    document.getElementById("output").innerText = result;
}
