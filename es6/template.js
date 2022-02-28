//template literals are the ones whixch are used with backslash.the reason we use them is to cutshort the code.
let word1 = "chi";
let word2 = "hu";
let num1 = 5;

/* let something = "word1 is: " + word1 + " word2 is: " + word2 + "  num1 is : " + num1;
console.log(something); */

//instead of the above whole something we can use ``
let something = `${word1 + word2}${num1}`
console.log(something);

//we can use multi line comment
let exam = `hello\n` + ` world`;
console.log(exam);

//we can only use $ sign
let watch = "fast-track";
let cost = 4500;
let buy = `${watch} ${cost}`;
console.log(buy);

let stay = `i know this is ${watch + cost}`
console.log(stay);

let know = `i know this is ${watch} watch whose cost is ${cost}`;
console.log(know);
