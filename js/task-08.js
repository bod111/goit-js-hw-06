const submitBtn = document.querySelector('button[type="submit"]');
const loginForm = document.querySelector(".login-form");
const inputEmail = document.querySelector('input[type="email"]');
const inputPassword = document.querySelector('input[type="password"]');

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const data = {};
  const formData = new FormData(event.currentTarget);

  if (
    loginForm.elements.email.value === "" ||
    loginForm.elements.password.value === ""
  ) {
    return alert("Пожалуйста заполните все поля");
  }
  formData.forEach((value, name) => {
    return (data[name] = value);
  });
  console.log("form-Data", data);
  loginForm.reset();
}
