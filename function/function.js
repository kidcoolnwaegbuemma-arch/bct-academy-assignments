
function calculateArea(sideA, sideB) {
    return sideA * sideB;
}

function toFahrenheit(tempCelsius) {
    const convertedTemp = (tempCelsius * 9/5) + 32;
    return convertedTemp;
}





const greetUser = function(userName) {
    const message = "Hello, " + userName + "!";
    return message;
};

console.log(calculateArea(5, 4));
console.log(calculateArea(6, 3));

console.log(toFahrenheit(0));
console.log(toFahrenheit(100));


console.log(greetUser("Ada"));
console.log(greetUser("Emmanuel"));