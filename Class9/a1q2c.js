var a = 25;

for (a=0; a<=25; a++) 
if (a%3 == 0 && a%5 == 0)
{
    console.log(a + "  " + "FizzBuzz");
}
else if  (a%5==0)
{
    console.log(a + "  " + "Buzz");
}
else if (a%3==0)
{
    console.log(a + "  " + "Fizz");
} 
else if (!a%3==0 && !a%5==0)
{
    console.log(a)
}
