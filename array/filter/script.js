let arr = [1,2,3,4,5,6,7,8];

let newArr = arr.filter(function(val){
    if (val % 2 == 0) return true;
});

console.log(newArr);