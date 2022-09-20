"use strict";

for (let n =0; n <= 25; n++)
{
    
    let result  = " ";
    let space = " ";

    if  (n % 3 == 0) result += "Fizz";
    if  (n % 5 == 0) result += "Buzz";
    

    else if  (n % 3 == 0  &&  n % 5 == 0 ) 
    result += "FizzBuzz"; 

    else (!(n % 3 == 0 ) && !(n % 5 == 0)) 
    result += " ";

    console.log(n + "\t" + result);
    
}
console.log("outside of the for loop");
