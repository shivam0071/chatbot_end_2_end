var url = 'http://test1234123.com';


const EventEmitter = require('events');
const emitter = new EventEmitter();

function log(message){
    // Send an http Request
    console.log(message);
    emitter.emit('messageLogged',{id:1, url:'http://'}); // this dictionary is an event argument obj
}

// EXPORTING, now we can
// module.exports.log = log;
// module.exports.endpoint = url;
// console.log(module)

// Lets use this in app1.js module

// We can even export the function directly
module.exports = log;
