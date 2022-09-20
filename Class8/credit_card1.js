let myString = "4250 1234 3548 2345";

myString = myString.trim().split(" ").join("");

let myslice = myString.slice(0,12);
console.log(myslice);

let myNewString = myString.replace(myslice ,"**************");

console.log("Balance for credit card" + myNewString);


