// ******************* Variables Declaration ******************* //

let firstOperand;
let secondOperand;
let currentInput = '';
let currentOperation;
const operations = {
    '+': addition,
    '-': subtraction,
    '*': multiplication,
    '/': division,
    'reset': reset,
    'decimal': decimal,
    '=': enter
};
let calculatorContainer = document.querySelector('.calculator');

// ******************* Utility Functions ******************* //

function displayResult(result) {
    let displayOutput = document.querySelector('.calculator__output');
    displayOutput.innerText = result;
}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function reset() {
    firstOperand = '';
    secondOperand = '';
    currentInput = '';
}

function decimal(value) {
}

function enter(operator, a ,b) {

}

function operate(operator, a, b) {
    console.log("Operate called with:", operator);
    if (operations[operator]) {
        return operations[operator](a, b);
    }
    return 'Invalid operator';
}

// ******************* Event Handlers ******************* //

function handleNumberKey(number) {
    currentInput += number;
    displayResult(currentInput);
}

function handleOperatorKey(operator) {
    if (!firstOperand) {
        firstOperand = parseFloat(currentInput);
        currentInput = '';
        currentOperation = operator; // Set the operation
    } else {
        secondOperand = parseFloat(currentInput);
        let result = operate(currentOperation, firstOperand, secondOperand); // Use the current operation
        displayResult(result);
        firstOperand = result; // Prepare for next operation
        secondOperand = null;
        currentInput = '';
        currentOperation = operator; // Set the next operation
    }
}

function handleEqualKey() {
    // Check if there's enough information to perform a calculation
    if (firstOperand !== undefined && currentInput !== '' && currentOperation !== undefined) {
        secondOperand = parseFloat(currentInput);

        // Use the operate function to get the result
        let result = operate(currentOperation, firstOperand, secondOperand);

        // Display the result
        displayResult(result);

        // Reset the current input and set the first operand to the result 
        // (so you can chain operations if desired)
        currentInput = '';
        firstOperand = result;
        currentOperation = undefined;
    } else {
        // Handle error, e.g., if "=" is pressed without a complete expression
        displayResult('Error');
    }
}

// ******************* Event Listeners ******************* //

calculatorContainer.addEventListener('click', (event) => {
    
    if (event.target.matches('.calculator__key')) {
        handleNumberKey(event.target.value);
    } else if (event.target.matches('.calculator__key--operator')) {
        console.log("Container clicked:", event.target);
        handleOperatorKey(event.target.value);
    } else if (event.target.matches('.calculator__key--enter')) {
        console.log("Container clicked:", event.target);
        handleEqualKey();
   
    }
});


// *************************************************** //

//fix = button



// TO DO! work on decimal and reset and get operator keys to work properly