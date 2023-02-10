const fs = require('fs');

console.log(readFileSync(process.argv[2]).toString().split('\n').length - 1);
