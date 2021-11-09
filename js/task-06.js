const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  if (validationInput.value.length < +validationInput.dataset.length) {
    changecolor("invalid", "valid");

    return;
  }
  changecolor("valid", "invalid");
});
function changecolor(addclass, removeclass) {
  validationInput.classList.add(addclass);
  validationInput.classList.remove(removeclass);
}
