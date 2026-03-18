let input = document.querySelector("input");

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    let now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

input.addEventListener(
  "input",
  throttle(function () {
    console.log("hey");
  }, 1000),
);
