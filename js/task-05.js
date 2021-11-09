const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value !== "") {
    return (output.textContent = event.currentTarget.value);
  }
  output.textContent = "Anonymous";
});
