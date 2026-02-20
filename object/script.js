let student = {
  name: "Bhupendra",
  course: "MCA",
  age: 23,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

console.log(student.name);
student.greet();