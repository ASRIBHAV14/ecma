//promise has 2 parameters-resolve and reject and there is also a state called pending.....this is stage when the code is started executing.

function abc() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            var error;
            if (!error) {
                console.log("your promise has been been resolved")
                resolve();
            }
            else {
                console.log("sorry didn't resolve")
                reject('not done!');
            }
        }, 2000);


    })

}
abc().then(function () {
    console.log("successfully resolved")
}).catch(function (error) {
    console.log("oops!" + error)
})