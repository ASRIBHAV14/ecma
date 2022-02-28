//spread operator
let ex1 = [4, 5, 6, 7, 8];
let ex2 = [...ex1];
console.log(ex2);
ex1.push(10);
console.log(ex1);

//spread can be used with objects also
let example1 = {
    //created obj
    firstName: 'bhavya',
    lastName: 'who knows'
}

let example2 = {
    ...example1
}
console.log(example2);

