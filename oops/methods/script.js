class Calculator {
  add(a, b) {
    return a + b;
  }
  mul(a, b) {
    return a * b;
  }
}

let calc = new Calculator();

console.log(calc.add(2, 3));
