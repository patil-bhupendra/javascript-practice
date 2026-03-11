function CreateBiscuits(name, price, qty, company, category) {
  this.name = name;
  this.price = price;
  this.qty = qty;
  this.category = category;
}

CreateBiscuits.prototype.company = "munch";

let biscuit1 = new CreateBiscuits("Oreo", 10, 5, "Chocholate");
let biscuit2 = new CreateBiscuits("Fantasy", 20, 3, "Chocholate Filled");

console.log(biscuit1);
console.log(biscuit2);
