// Question 1
// for (let i = 2; i <= 20; i++) {
//     console.log( `5 x ${i} = ${5 * i}`);
// }

// Question 2
const score = 20;

if (score < 0 || score > 100) {
    console.log("Invalid score");
} else if (score >= 70) {
    console.log("Grade: A");
} else if (score >= 60) {
    console.log("Grade: B");
} else if (score >= 50) {
    console.log("Grade: C");
} else if (score >= 45) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
};


// Question 3 
const choice = 3;

switch (choice) {
    case 1:
     console.log("Jollof Rice");
     break;
    case 2: 
    console.log("Fried Rice");
    break;
    case 3:
    console.log("Beans and Plaintain");
    break;
    case 4:
       console.log("Spaghetti");
       break;
       default:
        console.log("Invalid option");
}

// question 4