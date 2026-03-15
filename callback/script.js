function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  let username = "Bhupendra";
  callback(username);
}

processUser(greet);
