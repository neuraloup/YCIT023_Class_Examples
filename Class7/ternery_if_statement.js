const VOTING_AGE = 18;

let candidateAge = 15;

// if (candidateAge >= VOTING_AGE)
// {
//     console.log("Person can vote.")
// }
// else
// {
//     console.log("Person cannot vote.")
// }

// ternery if statement
// condition ? this value if true : this value if false;

let message = candidateAge >= VOTING_AGE ? "Person can vote" : "Person cannot vote";
console.log(message);