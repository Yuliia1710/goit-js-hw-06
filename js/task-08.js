// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElem = event.currentTarget.elements;

  const email = formElem.email.value;

  const password = formElem.password.value;

  const formData = {
    email,
    password,
  };

  if (email === "" || password === "") {
    alert("Все обязательные поля должны быть заполнены!");
  } else {
    console.log(formData);
  }
  form.reset();
}
