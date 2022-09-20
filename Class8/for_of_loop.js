// for-of loop
let sum = 0;
let count = 0;
let lowest = 0;
const totals = [2, 3, 6, 1];
let highest = totals[0];

// for (let x = 0; x < totals.length; x++)
// {
//     sum += totals[x];
//     // console.log(totals[x]);
// }

// console.log(sum);


for (let val of totals) {  // val holds the current value
  sum += val;
  //console.log(val);
  // if (!isEven(val))
}

console.log(sum);            