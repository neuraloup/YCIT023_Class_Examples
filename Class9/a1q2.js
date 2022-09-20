// FizzBuzz

//0   FizzBuzz

"use strict";

for (let n = 0; n <= 25; n++)
{
    let result = n + "\t";

    if (n % 3 == 0)
    {
        result += "Fizz";
    }

    if (n % 5 == 0)
    {
        result += "Buzz";
    }

    console.log(result);


}