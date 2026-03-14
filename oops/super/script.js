class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

let dog1 = new Dog("Tommy", "Labrador");
console.log(dog1.name);
