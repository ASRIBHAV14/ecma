//constructor comes with a capital letter and for accessing the parameers we have to use this keyword
function Alien(name, tech) {
    this.name = name;
    this.tech = tech;
    //if u want the same function for every obj
    this.similar=function(){
        console.log("all are similar")
    }
}
//we are using constructor functions because we can create many objects using the same properties
//we have to use new keyword for creating obj and if ine obj has any changes it doesn't effect others.
let alien1 = new Alien('bhavya', 'software');
let alien2 = new Alien('sujith', 'doctor');
alien1.name = "edokati";
console.log(alien1, alien2)
alien1.similar();
