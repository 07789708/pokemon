var http = require('http');
 
var servidor = http.createServer(function(peticion, respuesta) {
    respuesta.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
    respuesta.write('<h3>SERVER BÁSICO CON NODE.JS</h3>');
    console.log('petición web');
    respuesta.end();
});
 
servidor.listen(3000);
console.log('Ejecutando un server local con un node.js');