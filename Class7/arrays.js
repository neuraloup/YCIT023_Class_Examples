// Method 1
const ARRAY_ELEMENTS = 100;
let array = [];
for (let i=0 ; i < ARRAY_ELEMENTS; i++){
    array[i] = Math.floor(Math.random() * 100) + 1;
}

// Method2
const arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(Math.round(Math.random() * 99) + 1);
}
  
const randomArray = Array(150).fill().map(() => Math.floor(50 * Math.random()));
console.log(randomArray);



console.log(array);





