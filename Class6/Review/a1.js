const PROVINCIAL_TAX = 0.09775
const FED_TAX = 0.05
let diners = 5;
let costOfMeal = 150.00;

let provincialTaxes = costOfMeal * PROVINCIAL_TAX;
let fedTaxes = costOfMeal * FED_TAX;

let totalCost = costOfMeal + provincialTaxes + fedTaxes;

// -- add tax here.

let costPerPerson = totalCost / diners;

console.log(costPerPerson);