const calculateResult = () => {
    const firstOperand = prompt('Input the first number:');
    const secondOperand = prompt('Input the second number:');

    if (isNaN(firstOperand) || isNaN(secondOperand)) {
        // no NaN or Infinity
        return 'Input must be a valid, finite number.';
    }

    const arithmeticOperator = prompt('Input an arithmetic operator from the list below: +, -, *, /');

    let result;

    // implicit type coercion converts the strings to number for the operations 
    // that don't involve the addition operation
    switch (arithmeticOperator) {
        case '+':
            // explicitly converts operands to numbers for addition to prevent concatenation
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            result = 'Invalid arithmetic operator.';
            break;
    }

    // Displays an output depending on the value of the result (invalid number, or otherwise)
    return isNaN(result) ? result : `Result: ${firstOperand} ${arithmeticOperator} ${secondOperand} = ${result}`;
}

alert(calculateResult());