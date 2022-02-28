const modu = {
    x: 44,
    getx: function () {
        return this.x;
    }


}
const whatage = modu.getx;
//calling a function refers to executing the function
console.log(whatage());
//we get output as undefined because we are assigning the function to another variable in the other scope.
const lol=whatage.bind(modu)
console.log(lol());
