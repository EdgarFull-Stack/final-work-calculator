const displayElement = document.getElementById("display");

function updateDisplay(value) {
  displayElement.textContent = value;
}

function getButtonValue(button) {
  return button.textContent;
}

export { updateDisplay, getButtonValue };
