let abcd = document.querySelector("#abcd");

window.addEventListener("mousemove", function (dets) {
  abcd.style.top = dets.clientY - 50 + "px";
  abcd.style.left = dets.clientX - 50  + "px";
});
