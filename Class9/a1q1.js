"use strict";

// TIP Calculator

const NUM_DINERS = 2;
const PRICE_OF_MEAL = 100.00;
const GST = 0.05, PST = 0.09975;

const BAD_SERVICE = 0;
const OK_SERVICE = .10;
const GOOD_SERVICE = .15;
const GREAT_SERVICE = .20;

const SERVICE_OBTAINED = "B";
let tip_amount = 0.00;

if (SERVICE_OBTAINED === "A") { tip_amount = GREAT_SERVICE; }
if (SERVICE_OBTAINED === "B") { tip_amount = GOOD_SERVICE; }
if (SERVICE_OBTAINED === "C") { tip_amount = OK_SERVICE; }
if (SERVICE_OBTAINED === "D") { tip_amount = BAD_SERVICE; }

let totalPriceIncTax = (PRICE_OF_MEAL * (GST + PST)) + PRICE_OF_MEAL;
let grandTotalIncTip = totalPriceIncTax * (1 + tip_amount);

let totalPerPerson = grandTotalIncTip / NUM_DINERS;

console.log("$" + totalPerPerson.toFixed(2));
