const promiseOne = new Promise((resolve, reject) => {
    //do async tasks
    //db calls
    //cryptography
    //network calls

    setTimeout(() => {
        console.log("ASYNC task is complete");
        resolve()
    }, 1000);
})

promiseOne.then(()=> {
    console.log("Promise consumed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("ASYNC task two");
        resolve()
    }, 1000);
}).then(() => {
    console.log("ASYNC RESOLVED");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Akash", email:"akashthakreer@gmail.com"})
    }, 1000);
})

promiseThree.then((data) => {
    console.log(data);
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (error) {
            resolve({username: "Akash Thakre", email: "Wmail"})
        } else {
            reject("Error something went wrong")
        }
    }, 1000);
})


promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("the promise is either resolved or rejected");
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "Akash Thakre", email: "Wmail"})
        } else {
            reject("Error something went wrong")
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
   
}

consumePromiseFive()


async function getallusers(params) {
    const response = await fetch()
}