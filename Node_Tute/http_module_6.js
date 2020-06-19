// can create a webserver that listens to requests on a given port
const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Helloooo World');
        res.end();
    }
    if (req.url === '/api/test'){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
}); // this is also an event emitter


// server.on('connection',(socket) =>{
// console.log('new connection')
// });

server.listen(3000);
console.log('listening on port 3000...');