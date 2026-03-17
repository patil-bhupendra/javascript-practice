const counterModule = (function () {
  let count = 0; 

  return {
    increment: function () {
      count++;
      console.log("Count:", count);
    },
    getCount: function () {
      return count;
    }
  };
})();

counterModule.increment(); 
counterModule.increment(); 
console.log(counterModule.getCount()); 
console.log(counterModule.count); 