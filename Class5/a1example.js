/* Usage:  Default tip is "B" */

const GOOD_TIP = .20
const OK_TIP = .15
const MEDIOCRE_TIP = .1

const QUALITY_OF_SERVICE = "B";

let tipPercentage = 0.00;

if (QUALITY_OF_SERVICE == "A")
{
    tipPercentage = GOOD_TIP;
}

if (QUALITY_OF_SERVICE == "B")
{
    tipPercentage = OK_TIP;
}