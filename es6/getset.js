const person = {
    firstname: 'mosh',
    lastname: 'dani',
    fullName: function () {
        return `${person.firstname} ${person.lastname}`
    }
}
//so here if we wamt the fullname of any person we can give person.fullname
//but the problem here is we can't the names after defining.like..
person.fullName = 'joey';
//so here we use getters and setters 
const person = {
    firstname: 'mosh',
    lastname: 'dani',
    get fullName() {
        return `${person.firstname} ${person.lastname}`
    },
    set fullName(value){
        const parts=value.split('');
        this.firstname=parts[0];
        this.lastname=parts[1]
    }
}
person.fullName='john arrat';