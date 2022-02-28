let number = new Array(20, 30, 40, 50);
let number2 = new Array(30, 40, 5, 50000, 9000)

//console.log(number2.sort());
//adding another element
//console.log(number.push(9));
//console.log(number.concat(number2))
//console.log(number.pop())//removes the last elementy from the Array
//console.log(number.reverse())

//shift() removes the first element in the array and pop() removes the first element in the array
//console.log(number2.shift());

//splice method either overwrites,adds or deletes the elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
//(fruits.splice( 2, "Lemon"));
console.log(fruits.splice(2, 2));

let num = new Array(9, 8, 0, 10, 13);
num.sort();
console.log(num)