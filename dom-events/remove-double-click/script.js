let p = document.querySelector("p");

function changeColor() {
  p.style.color = "yellow";
  p.removeEventListener("dblclick", changeColor);
}

p.addEventListener("dblclick", changeColor);
