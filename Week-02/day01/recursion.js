function factorial(num) {
    //base case
    if (num === 1 || num === 0) {
        return 1
    } else {
        return num * factorial(num - 1)
    }

}


console.log(factorial(5))
console.log(factorial(4))