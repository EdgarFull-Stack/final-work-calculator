import { add, subtract, multiply, divide } from "./mathOperations.js";
import { updateDisplay } from "./domElements.js";

let currentOperand = "";
let previousOperand = "";
let operation = "";

function clear() {
  currentOperand = "";
  previousOperand = "";
  operation = "";
  updateDisplay("0");
}
function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) return;
  currentOperand = currentOperand.toString() + number.toString();
  updateDisplay(currentOperand);
}

function deleteLast() {
  currentOperand = currentOperand.toString().slice(0, -1);
  updateDisplay(currentOperand === "" ? "0" : currentOperand);
}
function chooseOperation(operator) {
  if (currentOperand === "") return;
  if (previousOperand !== "") compute();
  operation = operator;
  previousOperand = currentOperand;
  currentOperand = "";
}
function compute() {
  let result;
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case "+":
      result = add(prev, curr);
      break;
    case "-":
      result = subtract(prev, curr);
      break;
    case "*":
      result = multiply(prev, curr);
      break;
    case "/":
      result = divide(prev, curr);
      break;
    default:
      return;
  }
  currentOperand = result.toString();
  operation = "";
  previousOperand = "";
  updateDisplay(currentOperand);
}

export { appendNumber, chooseOperation, compute, clear, deleteLast };
