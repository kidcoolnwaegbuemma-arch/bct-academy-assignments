// Question 1
const principal = 1000;
const rate = 5;
const years = 3;

const interest = (principal * rate * years) / 100;
const total = principal + interest;

console.log(`Simple Interest: ${interest.toFixed(2)}`);
console.log(`Total Amount: ${total.toFixed(2)}`);

// Question 2
const text = "Hello brave new world";

console.log(`Total Characters: ${text.length}`);
console.log(`Total Words: ${text.split(" ").length}`);
console.log(`Uppercase: ${text.toUpperCase()}`);
