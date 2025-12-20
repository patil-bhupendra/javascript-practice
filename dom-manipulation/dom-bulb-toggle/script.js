var bulb = document.querySelector("#bulb");
var btn = document.querySelector("#toggleBtn");

var isBulbOn = false;

btn.addEventListener("click", function () {
  if (!isBulbOn) {
    bulb.style.backgroundColor = "yellow";
    btn.innerText = "Off";
    isBulbOn = true;
  } else {
    bulb.style.backgroundColor = "transparent";
    btn.innerText = "On";
    isBulbOn = false;
  }
});
