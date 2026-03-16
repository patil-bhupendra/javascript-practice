const user = {
  name: "Bhupendra"
};

function greet() {
  console.log(this.name);
}

const newFunc = greet.bind(user);

newFunc();