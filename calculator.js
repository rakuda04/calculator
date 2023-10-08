// add calculator output as variable

let number1 = number

let number2 = number

// TO DO: add a store function /var/obj to store number1 and number2

function displayResult(result) {
    let displayResult = document.getElementById('displayResult');
    displayResult.innerText = result;
  }



function addition(number1, number2) {
return number1 + number2;
}

function subtraction(number1, number2){
    return number1 - number2;
}

function multiplication(number1, number2){
    return number1 * number2;
}

function division(number1, number2){
    return number1 / number2;
}


let operators = document.getElementsByClassName('calculator__key--operator');



// below might be deleted/ adjusted in the future

Array.from(operators).forEach(operator => {
    operator.addEventListener('click', (event) => {
        let clickedOperator = event.target.innerText;
        if (operations[clickedOperator]) {
            // Here, you can call the operate function or do whatever you need
          /* 
          result = operate(clickedOperator, num1, num2);
           displayResult(result); 
           */
        }
    });
});

const operations = {
    '+': addition,
    '-': subtraction,
    '*': multiplication,
    '/': division
};

function operate(operator, number1, number2) {
    if (operations[operator]) {
        return operations[operator](number1, number2);
    }
    return "Invalid operator";
}

// ***************************************************