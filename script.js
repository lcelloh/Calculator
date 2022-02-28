//calculator
const operands = document.getElementById("operands");
const result = document.getElementById("result");
const btns = document.querySelectorAll("button");
const buttons = Array.prototype.slice.call(btns);

let firstNumber = [];
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
    operands.innerText = "0";
  } else if (isNaN(id) === false) {
    firstNumber.push(id);
    let firstNumberOutput = firstNumber.join("");
    operands.innerText = firstNumberOutput;
  } else if (isNaN(id) === true) {
    sign = id;
    operands.innerText = `${firstNumber.join("")} ${sign} `;
  }
}

function operate(sign, a, b) {
  switch (sign) {
    case "+":
      add(a, b);
      break;
    case "-":
      subtract(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "/":
      subtract(a, b);
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
