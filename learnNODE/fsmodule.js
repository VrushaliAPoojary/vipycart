const fs = require('node:fs');

fs.readFile('file.txt', 'utf8', (err, data)=>{
    console.log(err, data)
})

console.log("finishhh")