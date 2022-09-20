const VOTING_AGE = 18;
let candidateAge = 20;
let canVote = false;


// ternery if statement
// condition ? this value if true : this value if false;

canVote = candidateAge >= VOTING_AGE ? true : false;
console.log(canVote);
canVote = candidateAge >= VOTING_AGE;
console.log(canVote);
