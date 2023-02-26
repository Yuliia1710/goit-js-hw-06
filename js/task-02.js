const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const list = document.querySelector("#ingredients");

// ingredients.forEach((value) => {
//   const listItem = document.createElement("li");

//   listItem.textContent = value;
//   listItem.classList.add("item");
//   list.append(listItem);
// });

const items = ingredients.map((value) => {
  const listItem = document.createElement("li");
  listItem.textContent = value;
  listItem.classList.add("item");

  return listItem;
});

list.append(...items);

console.log(list);
