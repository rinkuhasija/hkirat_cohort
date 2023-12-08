const promise = new Promise((resolve, reject) => {
    console.log(resolve);
    console.log(reject);
})

// console.log(promise);

console.log(promise.then(console.log("itsresolved")));
console.log(promise.catch(console.log("catched")));