const user = {
  name: "Bhupendra"
};

function greet(age) {
  console.log(this.name, age);
}

greet.call(user, 22);