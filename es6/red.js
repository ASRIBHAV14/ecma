//reduce
const numbers = [1, -1, 2, 3];

/* let sum = 0;
for (let n of numbers)
    sum += n;
console.log(sum); */

//a=0,c=1=>a=1
//a=1,c=-1=>a=0
//a=0,c=2=>a=2
//a=2,c=3=>a=5
numbers.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
}, 0);
//here in reduce function first paramter should be callback function and second value should be the previous value i.e.,accumulator initialization
//it is upto us to  use the 0 or not in the reduce function.if we are not going to use the 0 our first element will be initialised first
//a=1,c=-1=>a=0
//a=0,c=2=>a=2
//a=2,c=3=>a=5

//or//
const sum = numbers.reduce(
    (accumulator, currentvalue) =>
        accumulator + currentvalue);
