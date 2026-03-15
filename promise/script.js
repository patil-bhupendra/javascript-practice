let pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Bhupendra");
  }, 5000);
});
pr.then((result) => {
  console.log(result);
});
