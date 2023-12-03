console.log("Hkirat first class")

console.log("\n")

//cluster module nodejs
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os')
const process = require('process');

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs.availableParallelism(); i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello world\n');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}

console.log("\n")

//objects

const obj1 = {
    name : "Rinku Hasija"
}

console.log(obj1["name"])


//
let sum = 0;
for(i=0; i<1000000000000; i++) {
    sum = sum+1
}

console.log(sum)