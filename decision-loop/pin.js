const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function checkPin(){
  const correctPin = "2468";
  let numberOfTries = 5;

  let enteredPin = "";

  let isCorrect = false; 

  while (enteredPin !== correctPin && numberOfTries > 0) {
    numberOfTries--;
    enteredPin = await ask("enter your pin: ");
    if (enteredPin !== correctPin) {
      console.log(`incorrect pin. you have ${numberOfTries} tries left.`)
    }
  };

  if (numberOfTries > 0 || enteredPin === correctPin) {
    console.log("Pin accepted. Welcome")
  } else {
    console.log("Sorry, you've exhausted your number of tries")
  }

  rl.close();
  
}

checkPin()