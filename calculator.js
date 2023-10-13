// ******************* Variables Declaration ******************* //

let firstOperand;
let secondOperand;
let currentInput = '';
const operations = {
    '+': addition,
    '-': subtraction,
    '*': multiplication,
    '/': division,
    'reset': reset,
    'decimal': decimal
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
}

function decimal(value) {
}

function operate(operator, a, b) {
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
    } else {
        secondOperand = parseFloat(currentInput);
        let result = operate(operator, firstOperand, secondOperand);
        displayResult(result);
        firstOperand = result;  // Storing the result for the next operation
        secondOperand = null;
    }
    currentInput = '';
}

// ******************* Event Listeners ******************* //

calculatorContainer.addEventListener('click', (event) => {
    if (event.target.matches('.calculator__key')) {
        handleNumberKey(event.target.value);
    } else if (event.target.matches('.calculator__key--operator')) {
        handleOperatorKey(event.target.value);
    }
    // ... handle other key types similarly
});

// *************************************************** //


// TO DO! work on decimal and reset and get operator keys to work properly