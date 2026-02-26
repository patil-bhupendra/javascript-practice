// Add a highlight class to every even item in a list.

let items = document.querySelectorAll("li");

items.forEach((item, index) => {
  if (index % 2 !== 0) {
    item.classList.add("highlight");
  }
});
