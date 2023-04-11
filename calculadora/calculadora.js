let num1 = '';
let num2 = '';
let operator = '';
const display = document.getElementById('display');

function addToDisplay(value) {
  if (display.textContent === '0') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function setOperator(value) {
  if (num1 === '') {
    num1 = display.textContent;
    operator = value;
    clearDisplay();
  } else {
    num2 = display.textContent;
    calculate();
    operator = value;
  }
}

function clearDisplay() {
  display.textContent = '0';
}

function calculate() {
  if (num2 === '') {
    num2 = display.textContent;
  }
  let result = 0;
  switch (operator) {
    case '+':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case '*':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case '/':
      result = parseFloat(num1) / parseFloat(num2);
      break;
  }
  num1 = result.toString();
  num2 = '';
  display.textContent = result.toString();
}

function addEventListeners() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonValue = button.getAttribute('value');
      if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
        setOperator(buttonValue);
      } else if (buttonValue === 'C') {
        clearDisplay();
        num1 = '';
        num2 = '';
        operator = '';
      } else if (buttonValue === '=') {
        calculate();
      } else {
        addToDisplay(buttonValue);
      }
    });
  });
}

addEventListeners();
