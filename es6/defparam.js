/* //Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5 

//in the second line we get 5 as output and it is taking 1 as default parameter

//In JavaScript, function parameters default to undefined. However, it's often useful to set a different default value. This is where default parameters can help.

//In the following example, if no value is provided for b when multiply is called, b's value would be undefined when evaluating a * b and multiply would return NaN.

function mul(a, b) {
    console.log(a*b);
}
mul(5)//nan
 */

function fullName(firstname, middlename, lastname=" " ) {
    if (middlename !== undefined) {
        console.log(`${firstname} ${middlename} ${lastname}`)
    }
    else {
        console.log(`${firstname} ${lastname}`)
    }
}
fullName("shriya", "vaishali","bh")
fullName("shi","yu");
fullName("shi")


