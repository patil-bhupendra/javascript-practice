function CreateBiscuits(name, price, qty, company, category) {
  this.name = name;
  this.price = price;
  this.qty = qty;
  this.company = company;
  this.category = category;
}

let biscuit1 = new CreateBiscuits("Oreo", 10, 5, "Cadbury", "Chocholate");
let biscuit2 = new CreateBiscuits("Fantasy", 20, 3, "Parle", "Chocholate Filled");

console.log(biscuit1);
console.log(biscuit2);