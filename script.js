//calculator
const operands = document.getElementById("operands");
const result = document.getElementById("result");
const btns = document.querySelectorAll("button");
const buttons = Array.prototype.slice.call(btns);

let firstNumber = [];
let secondNumber = [];
let sign;
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    handleClick(button.id);
  })
);

function handleClick(id) {
  if (operands.innerText.length > 20) {
    if (id == "ac") {
      firstNumber = [];
      operands.innerText = "0";
    } else {
      alert("Max length reached! ");
    }
  }
  if (id == "ac") {
    firstNumber = [];
    secondNumber = [];
    sign = undefined;
    operands.innerText = "0";
    result.innerText = "0";
  } else if (sign != undefined) {
    if (isNaN(id) === true && secondNumber.length > 0) {
      if (id === "=") {
         let res = operate(sign, parseInt(firstNumber.join("")), 
          parseInt(secondNumber.join("")))
        result.innerText = res
      }
    } else if (isNaN(id) == false) {
      secondNumber.push(id);
      let secondNumberOutput = secondNumber.join("");
      operands.innerText = `${firstNumber.join("")} ${sign} ${secondNumberOutput}`;
    }
  } else if (isNaN(id) === false) {
    firstNumber.push(id);
    let firstNumberOutput = firstNumber.join("");
    operands.innerText = firstNumberOutput;
  } else if (isNaN(id) === true && firstNumber.length > 1 && id != "=") {
    sign = id;
    operands.innerText = `${firstNumber.join("")} ${sign} `;
  }
  console.log(sign);
  console.log(firstNumber);
  console.log(secondNumber);
}

function operate(sign, a, b) {
  switch (sign) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return subtract(a, b);
      break;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
