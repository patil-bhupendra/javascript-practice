// Use .reduce() to find the sum of this array:
let arr = [10, 20, 30];
let sum = arr.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log(sum)