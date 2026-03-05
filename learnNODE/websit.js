const http = require('node:http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>This is appu</h1><p>she is always happy')

})

server.listen(port, ()=>{console.log(`Server is listening on ${port}`)});