const EventEmitter = require('events');
// const emitter = new EventEmitter();


// Inside a class function keyword is not used for funs
class Logger extends EventEmitter{

    log(message){
        // Send an http Request
        console.log(message);
        this.emit('messageLogged',{id:1, url:'http://'}); // this dictionary is an event argument obj
    }
}


module.exports = Logger;