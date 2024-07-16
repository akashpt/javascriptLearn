//Stack memory is used in primitive datatypes  (values)

let myYoutubeName = "Akash Thakre"
let anotherName = myYoutubeName
anotherName = "Pralhad Thakre"

console.log(myYoutubeName); //Akash Thakre
console.log(anotherName); //Pralhad Thakre


//head memory is used in non-primitive datatypes (reference)
let userOne = {
    email: "akashthakreer@gmail.com",
    upi: "ybl"
}


let usertwo = userOne;
usertwo.email = "khj@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);

