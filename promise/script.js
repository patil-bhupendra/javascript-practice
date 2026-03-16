let pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) resolve("resolved with " + rn);
    else reject("rejected with " + rn);
  }, 3000);
});

pr.then((result) => {
  console.log(result);
});

pr.catch((error) => {
  console.log(error);
});
