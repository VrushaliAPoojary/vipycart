const http = require('http');

const server = http.createServer(function(req, res){

    res.statusCode("200");
    res.write("hello");
    res.end();


})

server.listen('http://127.0.0.1:3000')