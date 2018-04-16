// promises

// main motivation is to bring synchronous style error handling to Async / Callback style code...

import fs = require('fs'); 

function loadJSONSying(filename: string) {
    return JSON.parse(fs.readFileSync(filename)); 
}

console.log(loadJSONSying('good.json'));

try {
    console.log(loadJSONSying('absent.json'));
}
catch (err) {
    console.log('absent.json error', err.message); 
}

try {
    console.log(loadJSONSying)
}
catch (err) {
    console.log('invalid.json.error', err.message); 
}