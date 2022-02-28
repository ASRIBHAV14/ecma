//rest operator is similar to spread operator.spread operator gives us the whole array or object and rest operator gives the ability to get the arguments out of function.
//we use it when we don't know how many inputs are given
function add(nums) {
    console.log(nums);
}
add(4, 5)
//if we give only 1 argument and more than 1 parameter in the function we only get 1 output.i.e,, no of parameters =no of arguments

function add(numy) {
    console.log(arguments);
    //this gives the arrays with the index

}
add(4, 5, 6, 7)

function add(...numn) {
    console.log(numn);
}
add(4, 5,6,8)