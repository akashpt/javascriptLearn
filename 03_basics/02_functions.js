// more on functions

function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500)); //[ 200, 400, 500 ]

function nextcalculateCartPrice(val, val2,...num1) {
    return num1;
}

console.log(nextcalculateCartPrice(200, 400, 500,900)); //[ 500, 900 ]

const user = {
    username: "Akash",
    age: 50
}

function handleObject(anyObject) {
    console.log(`user name is ${anyObject.username} and age is ${anyObject.age}`);
}

//handleObject(user) //user name is Akash and age is 50
handleObject({username: "Akash", age: 30})

const myNewArr = [200,400,100,600]

function  returnSecondaryValue(getArray) {
    return getArray[0]
}

console.log(returnSecondaryValue(myNewArr)); // 200