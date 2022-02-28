var number1 = new Array(20, 30, 40, 50)
console.log("size of number1 array is: " + number1.length)

var number2 = new Array(20)
console.log("size of number2 array is:" + number2.length)
//here we get the ouput as 20 as we have given only 1 number.

//if u want to create only array of size 1 u have to use array.of
var number3 = Array.of(9);
console.log("size of number3 array is:" + number3.length);