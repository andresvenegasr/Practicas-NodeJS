
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    res.write(JSON.stringify({
        Nombre: 'Andres Venegas',
        Edad: 25 
    }));

    res.end();
}).listen(8080);

console.log('Start server in 8080 port.')