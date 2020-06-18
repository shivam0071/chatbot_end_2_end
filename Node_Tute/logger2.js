var url = 'http://test1234123.com';

function log(message){
    // Send an http Request
    console.log(message);
}

// EXPORTING, now we can
// module.exports.log = log;
// module.exports.endpoint = url;
// console.log(module)

// Lets use this in app1.js module

// We can even export the function directly
module.exports = log;
