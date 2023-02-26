// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

const body = document.querySelector("body");
console.log(body);

const btnEl = document.querySelector(".change-color");
console.log(btnEl);

const colorVal = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnEl.addEventListener("click", onBtnClick);

function onBtnClick() {
  let currentColor = getRandomHexColor();

  body.style.backgroundColor = currentColor;

  colorVal.textContent = currentColor;
}
