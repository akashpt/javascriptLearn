const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);


/**
 * 
 * reduce() Method: This method is used to condense an array into a single value. It achieves this by applying a function (our callback) to each element and accumulating the result in an "accumulator" (acc).
Callback Function: Our callback function takes two arguments:

    acc: The accumulator, which stores the accumulated result so far.
    curr: The current value being processed from the array.

Initial Value (0): We provide 0 as the initial value for the accumulator.
How It Works:

    In the first iteration, acc is 0 and curr is 1. The callback returns 0 + 1 = 1.
    In the second iteration, acc is now 1 and curr is 2. The callback returns 1 + 2 = 3.
    In the third iteration, acc is 3 and curr is 3. The callback returns 3 + 3 = 6.
    Since there are no more elements, reduce() returns the final value of the 
 */


    /**
     * 
     * Key Points:

    Versatility: reduce() can be used for various tasks:
        Summing numbers
        Finding maximum/minimum values
        Concatenating strings
        Flattening arrays
        And more!
    Higher-Order Function: reduce() is a higher-order function, meaning it takes a function as an argument and returns a single value.
     */