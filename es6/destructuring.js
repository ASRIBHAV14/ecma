//destructuring objects
const dresses = {
    salwar: 'pink',
    jeans: 'blue',
    pj: 'black',

}

const { salwar: sl, jeans: j, pj: p } = dresses;
console.log(`${sl} is easy to wear than ${j} and ${p}`);

const food = {
    fastfood: 'noodles',
    streetfood: 'golgappe',
    healthyfood: 'apple'
}
const { fastfood: ff, streetfood: sf, healthyfood: hf } = food;
console.log(`nothing is more than ${ff} and ${sf}`);