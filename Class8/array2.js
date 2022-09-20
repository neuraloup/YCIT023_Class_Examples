const arr = [1,2,3];


console.log(arr.length);


let newSize = arr.push("X");

console.log(newSize);
console.log(arr);

let member = arr.pop();
console.log(member);

console.log(arr.length);

arr.unshift("B");

console.log(arr);