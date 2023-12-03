//function can take other func as arguments

function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    // return result;
    fnToCall(result)
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

console.log(sum(1, 4, displayResult))
console.log(sum(1, 6, displayResultPassive))