/*
    Ticket #1: For your first ticket, we have a function that right now accepts two inputs and returns a sum. However, we want to update it so that it doesn't allow inputs that aren't numbers. If either input isn't a number, please return a string saying "Please only enter numbers"
*/

function sum(a, b) {
    // Update the function to return "Please only enter numbers" if either input is not a number
    return a + b;
}

/*
    Ticket #2: For your second ticket, this works if there are only two numbers input right now but it throws an error if additional arguments are added. Find a way to make sure the total can be updated if there are more arguments passed.
*/

function multipleInputSum(a, b, ...otherNums) {
    const total = a + b;
    for(let i = 0; i < otherNums.length; i++) {
        total += otherNums[i];
    }
    return total;
}

/*
    Ticket #3: For your third ticket, works right now no matter how many arguments are passed in as long as they're all integers. However, we'd like to make sure it returns "Please only enter numbers" if any of the arguments are not integers.
*/

function multipleOnlyNumsSum(a, b, ...otherNums) {
    let sum = a + b;
    for(let i = 0; i < otherNums.length; i++) {
        sum += otherNums[i];
    }
    return sum;
}

module.exports = {
    sum: sum,
    multipleInputSum: multipleInputSum,
    multipleOnlyNumsSum: multipleOnlyNumsSum,
}