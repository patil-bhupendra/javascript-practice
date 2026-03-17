function createUser(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(`Hello, I am ${this.name}`);
    },
  };
}

const user1 = createUser("Rahul", 22);
const user2 = createUser("Aman", 24);

console.log(user1);
user1.greet();