
const myValue = 5;
const myString = "Hello";
const myBool = true;

const misc = [ "A", "B", "C" ];
misc = null;
const misc2 = [1,2,3];

misc[2] = "X"; // OK

misc = ["C", "D"]; // Fails


// console.log(misc[1]);
// misc[2] = "X";
// // myValue = 7;
// console.log(misc);