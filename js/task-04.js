let counterValue = 0;
const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');
const valEl = document.querySelector("#value");
btnIncr.addEventListener("click", handleBtnIncrClick);
btnDecr.addEventListener("click", handleBtnDecrClick);
function handleBtnIncrClick() {
  console.log((counterValue += 1));
  valEl.textContent = counterValue;
}
function handleBtnDecrClick() {
  console.log((counterValue -= 1));
  valEl.textContent = counterValue;
}
