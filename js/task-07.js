const fontSizeControl = document.querySelector("#font-size-control");
const changedText = document.querySelector("#text");
fontSizeControl.addEventListener("input", () => {
  changedText.style.fontSize = fontSizeControl.value + "px";
});
