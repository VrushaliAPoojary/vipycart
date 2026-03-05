const http = require('node:http');
const fs = require('node:fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1>This is appu</h1><p>she is always happy')
    }
    
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>This is appu</h1><p>she says hiii!')
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')

        res.end(data.toString())
    }
    else{
        res.statusCode = 400;
        res.end('<h1>no page</h1>')
    }
   

})

server.listen(port, ()=>{console.log(`Server is listening on ${port}`)});