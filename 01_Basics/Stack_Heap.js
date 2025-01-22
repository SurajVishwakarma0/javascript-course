//Stack
let myYoutubeName = "Hitesh Chaudhry"
let anotherName = myYoutubeName;
anotherName = "chai aur code"

console.log(myYoutubeName);
console.log(anotherName);

//Heap

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "hiteshchaudhry@google.com"
console.log(userOne.email);
console.log(userTwo.email);


