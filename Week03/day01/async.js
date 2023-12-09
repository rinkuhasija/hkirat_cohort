let a = 1

setTimeout(() => {
    console.log("from setTimeout 1");
}, 1000);

//heavy operation
for (let index = 0; index < 10000000; index++) {
    a = a + index
}

console.log(a);

setTimeout(() => {
    console.log("from setTimeout 2");
}, 1000);

