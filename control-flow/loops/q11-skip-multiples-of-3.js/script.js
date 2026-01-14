// Write a loop from 1 to 20 that skips numbers divisible by 3 and prints all others.

for (i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
