const fs = require('node:fs');

fs.readFile('file.txt', 'utf8', (err, data)=>{
    console.log(err, data)
})

const a = fs.readFileSync('file.txt')  //intensionally blocking
const b = fs.writeFileSync("file.txt", "hii appu", ()=>{
    console.log("runn!!!!!!")
})

console.log("finishhh")
console.log(a.toString())