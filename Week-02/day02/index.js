// count 1  to 100
let ans = 0
for (let i = 1; i <= 50; i++) {
    ans = ans + i
}
console.log(ans);

//function to calculate sum to n
function sumToNumber(n) {
    let ans = 0;
    for (let index = 0; index <= n; index++) {
        ans = ans + index

    }
    return ans;
}

console.log(sumToNumber(5));




