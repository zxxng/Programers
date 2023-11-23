const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const a = `a = ${Number(input[0])}`;
    const b = `b = ${Number(input[1])}`;
    console.log(a);
    console.log(b);
});