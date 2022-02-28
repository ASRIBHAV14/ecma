/* var sayhello = async function xy(name) {
    return "hello " + name;
}
var message = sayhello("bhavya");
console.log(message);
console.log(typeof (message));
message
    .then((messageres) => { console.log("message :" + messageres) })
    .catch((messagerej) => { console.log("message" + messagerej) }) */
//async gives u promise.it returns an object.it is widely used with await

async function okfunc() {
    let pro = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done")
        }, 10000);
    })
    let result = await pro;
    console.log("......." + result);
}
okfunc();
console.log("endssssss")
//if await is not used the program doesn't settle down that means it doesn't wait for the promise to get resolved
