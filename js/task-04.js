//первый способ

// const incrementBtn = document.querySelector('button[data-action="increment"]');
// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const value = document.querySelector("#value");
// const handleClick = (event) => {
//   let counterValue = Number(value.textContent);
//   if (event.currentTarget === incrementBtn) {
//     counterValue += 1;
//   }
//   if (event.currentTarget === decrementBtn) {
//     counterValue -= 1;
//   }
//   return (value.textContent = counterValue);
// };
// incrementBtn.addEventListener("click", handleClick);
// decrementBtn.addEventListener("click", handleClick);

// второй способ
const container = document.querySelector("#counter");
const refs = {
  incrementBtn: container.querySelector('[data-action="increment"]'),
  decrementBtn: container.querySelector('[data-action="decrement"]'),
  value: container.querySelector("#value"),
};
let counterValue = Number(refs.value.textContent);
refs.incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
});
refs.decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
});
