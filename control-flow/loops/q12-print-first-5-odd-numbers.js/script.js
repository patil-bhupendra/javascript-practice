// Write a loop from 1 to 100 that prints only the first 5 odd numbers and then stops the loop.

let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    count++;
    console.log(i);
  }

  if (count === 5) {
    break;
  }
}
