// Stop at first multiple of 7
// Write a loop from 1 to 100 that :
// Prints each number
// Stops completely when it finds the first number divisible by 7

for(i=1; i<=100; i++){
    console.log(i);
    if(i%7===0){
        break;
    }
}