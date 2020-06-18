// USING NODE inbuilt MODULES.. There are two methods...sync and async..use async
// https://nodejs.org/dist/latest-v14.x/docs/api/
const fs = require('fs'); // Import

fs.readdir('./', function(err, files){
    if (err) console.log(err)
    else console.log(files)
});
// [ 'app1.js', 'app3.js', 'logger2.js', 'node_notes' ]