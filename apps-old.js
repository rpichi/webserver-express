const http = require('http');

http.createServer((req, res) => {
    res.write('Hola Mundo');
    res.end();

}).listen(8081);

console.log('escuchando..');