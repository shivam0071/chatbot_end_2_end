function hello_node(name){
console.log("Hello " + name);
}

// window.hello_node("Shivam"); // ReferenceError: window is not defined
hello_node("Shivam");
// console.log(module)


// # IMPORTING MODULES 
// var logger = 
// console.log(logger);
// logger.log("A message from logger2");

// Best practice is to use const instead of var above...so that its not modified, use jshint to avoid such
// errors at runtime

// const logger = require('./logger2');
// logger.log("A message from logger2");

// importing funcitons directly
const log = require('./logger2');
log("A message from logger2");
console.log(log); // [Function: log]