console.log("this is an example of promise");

const employees = [
    { name: "bhavya", role: 'software', sal: 45000 },
    { name: 'joey', role: 'actor', sal: 100000 }
]

function enrollemployee(employee) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            employees.push(employee);
            console.log('students enrolled')
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }

        }, 2000)
    })
}

function getEmployees() {
    setTimeout(function () {
        let str = "";
        employees.forEach(() => {

        })
    })
}