let [firstname, middlename, lastname] = ["bhavya", "sri", "ayyagari"]
lastname = "jona";
console.log(lastname);

let numbers = [1, 2, 3, 4];
let hostv = numbers;
console.log(hostv[0])

/* let nu=[9,8,6,4,5,6];
let[a,b,c,d,e,f]=nu;
console.log(a,b, ''); */

let word = 'my name is sri bhavya ayyagari'.split(' ');
let [a, b, c, d, e, f] = word
//console.log(a, '', '', d, e, f)
console.log(...e)