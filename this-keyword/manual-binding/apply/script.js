const user = {
  name: "Bhupendra",
};

function greet(age, city) {
  console.log(this.name, age, city);
}

greet.apply(user, [22, "Pune"]);
