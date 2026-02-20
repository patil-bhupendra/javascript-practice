let arr = [2, 4, 6, 7, 8];

let result = arr.some(function(x) {
  return x % 2 !== 0;
});

console.log(result);
