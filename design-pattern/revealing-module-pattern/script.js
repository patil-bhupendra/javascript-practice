const counter = (function () {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  function getCount() {
    return count;
  }

  return {
    increment: increment,
    getCount: getCount,
  };
})();

counter.increment();
console.log(counter.getCount());