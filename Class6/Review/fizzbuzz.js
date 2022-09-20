function fizzBuzz()
{
    let myString = "";
    for (i=0;i<=25;i++)
    {
        myString += i + "\t";
        
        if((i%3==0)&&(i%5==0)) // FizzBuzz logic.
        {
            myString += "FizzBuzz";
        }

        // Add fizz logic here.

        // add buzz logic here.

        myString += "\n";
    }

    console.log(myString);
}

fizzBuzz();