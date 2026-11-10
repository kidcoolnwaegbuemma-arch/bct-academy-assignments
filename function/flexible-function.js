
function makeHandle(name, prefix = "@") {
    const username = name.toLowerCase().replaceAll(" ", "_");
    return prefix + username;
}

function describeTrip(destination, days = 3, budget = 500) {
    return days + " days in " + destination + " with a budget of " + budget;
}

function sum(...values) {
    let total = 0;

    for (const number of values) {
        total = total + number;
    }

    return total;
}

function average(...scores) {
    if (scores.length === 0) {
        return 0;
    }

    let total = 0;

    for (const score of scores) {
        total = total + score;
    }

    return total / scores.length;
}

// Testing the functions
console.log(makeHandle("Ada Lovelace"));
console.log(makeHandle("John Smith", "#"));

console.log(describeTrip("Cairo"));
console.log(describeTrip("London", 5, 1000));

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));
console.log(sum());

console.log(average(2, 4, 6));
console.log(average(10, 20, 30));