const numbers = document.querySelectorAll(".numbers,.operations");
const screen = document.querySelector("#screen");
const equal = document.querySelector("#equal");
const reset = document.querySelector("#reset");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    let value = e.target.textContent;
    screen.innerHTML += value;
  });
});

equal.addEventListener("click", () => {
  let screenValue = screen.textContent;
  let result = 0;
  result = eval(screenValue);

  screen.innerHTML = result;
});

reset.addEventListener("click", () => {
  screen.innerHTML = "";
});
