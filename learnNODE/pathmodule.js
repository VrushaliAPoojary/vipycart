const path = require('node:path');

const a = path.basename('C:\\temp\\myfile.html');
const b = path.dirname('C:\\temp\\myfile.html');
const c = path.extname(__filename);
// Returns: 'myfile.html'
console.log(a)
console.log(b)
console.log(c)
// console.log(path)