const changeColorBtn = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtn.addEventListener("click", addColor);

function addColor() {
  const color = getRandomHexColor();
  currentColor.textContent = color;
  document.body.style.background = color;
}
