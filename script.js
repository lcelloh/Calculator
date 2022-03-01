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
      }else if (isNaN(id) == true){
        res = operate(sign, parseInt(firstNumber.join("")), 
          parseInt(secondNumber.join("")))
          result.innerText = res
          firstNumber = []
          secondNumber = []
          firstNumber.push(res)
          sign = id
          operands.innerText = `${firstNumber.join("")} ${sign}`}
    } else if (isNaN(id) == false && id !== "0") {
      secondNumber.push(id);
      let secondNumberOutput = secondNumber.join("");
      operands.innerText = `${firstNumber.join("")} ${sign} ${secondNumberOutput}`;
    }
  
  } else if (isNaN(id) === false && id !==  "0") {
    firstNumber.push(id);
    let firstNumberOutput = firstNumber.join("");
    operands.innerText = firstNumberOutput;
  } else if (isNaN(id) === true && firstNumber.length > 0 && id != "=") {
    sign = id;
    operands.innerText = `${firstNumber.join("")} ${sign} `;
  }
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
      return divide(a, b);
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
