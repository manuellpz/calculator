const numbers = document.querySelectorAll(".numbers,.operations");
const screen = document.querySelector("#screen");
let operation = "";
const equal = document.querySelector("#equal");
const reset = document.querySelector("#reset");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    let value = e.target.textContent;
    screen.innerHTML += value;
    if (value == "+") {
      operation = "+";
    } else if (value == "-") {
      operation = "-";
    } else if (value == "*") {
      operation = "*";
    } else if (value == "/") {
      operation = "/";
    }
  });
});

equal.addEventListener("click", () => {
  let screenValue = screen.textContent;
  let signPos = screenValue.indexOf(operation);
  let firstValue = screenValue.substring(0, signPos);
  let secondValue = screenValue.substring(signPos + 1);
  let result = 0;

  if (operation == "+") {
    result = parseFloat(firstValue) + parseFloat(secondValue);
  } else if (operation == "-") {
    result = parseFloat(firstValue) - parseFloat(secondValue);
  } else if (operation == "*") {
    result = parseFloat(firstValue) * parseFloat(secondValue);
  } else if (operation == "/") {
    result = parseFloat(firstValue) / parseFloat(secondValue);
  }
  screen.innerHTML = result;
});

reset.addEventListener("click", () => {
  screen.innerHTML = "";
});
