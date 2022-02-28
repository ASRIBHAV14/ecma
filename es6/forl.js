/* let incomes = [45000, 50000, 55000];
let total = 0;
for (const income of incomes) {
    //for each income im incomes is iterable
    console.log(income);
    total += income;
}

let word = 'haii this is bhavya';
for (char of word) {
    console.log(char);
}

let incomes = [45000, 50000, 55000];
let total = 0;
for (var income of incomes) {
    //for each income im incomes is iterable
    console.log(income);
    total += income;
} */
//for of loop is not designed to update or add the values
let incomes = [45000, 50000, 55000];
let total = 0;
for (let income of incomes) {
    //for each income im incomes is iterable
    income += 5000;
}
console.log(incomes);
