// USING NODE inbuilt MODULES.. There are two methods...sync and async..use async
// https://nodejs.org/dist/latest-v14.x/docs/api/
const fs = require('fs'); // Import

fs.readdir('./', function(err, files){
    if (err) console.log(err)
    else console.log(files)
});
// [ 'app1.js', 'app3.js', 'logger2.js', 'node_notes' ]


// EVENTS
// First we emit or evoke an even 
// then  we listen to that event


const EventEmitter = require('events');
const emitter = new EventEmitter();

// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });


// Register a listener
//addListener(eventName, listener)
// We can use on instead on addListener to list to the events (alias)
// emitter.on('messageLogged', function(){
// console.log('Listener Called');
// });

// with args
// emitter.on('messageLogged', function(e){
//     console.log('Listener Called', e);
// });

// ARROW FUNCTION
emitter.on('messageLogged', (e) => {
    console.log('Listener Called', e);
});  


// raise an event
// emitter.emit('messageLogged',{id:1, url:'http://'}); // this dictionary is an event argument obj

// lets play around with this

const Logger = require('./logger4');
logger = new Logger();

logger.on('messageLogged', (e) => {
    console.log('Listener Called', e);
});  

logger.log("message_logger");
