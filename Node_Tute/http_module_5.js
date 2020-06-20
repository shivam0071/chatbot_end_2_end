// can create a webserver that listens to requests on a given port
const http = require('http');


const server = http.createServer(); // this is also an event emitter


server.on('connection',(socket) =>{
console.log('new connection')
});

server.listen(3000);
console.log('listening on port 3000...');