// create a new image element with a placeholder source and add it at the top of a div.

let img = document.createElement("img");
img.setAttribute(
  "src",
  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
);
img.classList.add("placeholder")

document.querySelector("div").prepend(img);
