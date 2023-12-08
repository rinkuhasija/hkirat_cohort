//dono ka square nikal ke add karna

function square(n) {
    return n * n
}

function addSquareOfTwo(a, b, fn) {
    let ans1 = fn(a)
    let ans2 = fn(b)
    return ans1 + ans2
}

console.log(addSquareOfTwo(5, 5, square)); //50
console.log(addSquareOfTwo(3, 4, square));


function cube(n) {
    return n * n * n
}

console.log(addSquareOfTwo(5, 5, cube));