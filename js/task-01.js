const categories = document.querySelector("#categories");
console.log("Number of categories: ", categories.children.length);
const items = document.querySelectorAll(".item");
items.forEach((item) => {
  const headers = item.querySelector("h2");
  const arr = item.querySelectorAll("li");
  console.log("                             ");
  console.log(`Category: ${headers.textContent}`);
  console.log(`Elements: ${arr.length}`);
});
