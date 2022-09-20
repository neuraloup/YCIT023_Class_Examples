let msec = Date.parse("March21, 2012")

console.log(msec);

const d12 = new Date(msec)

//console.log(d12);

console.log("d12: " + d12);

console.log(d12.getTime());

// Wed Mar 21 2012 00:00:00 GMT-0400 (Eastern Daylight Time)
// Why is it not millisecond?
