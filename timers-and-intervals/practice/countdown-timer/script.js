let count = 10;

interval = setInterval(() => {
  if (count >= 1) {
    count--;
    console.log(count);
  } else {
    clearInterval(interval);
  }
}, 1000);
