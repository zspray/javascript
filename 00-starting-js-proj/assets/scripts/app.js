import eoq from './util.js';
// import { ApiKey } from './util.js';
// import * as util from './util.js';
// console.log(`Your API Key is: ${util.ApiKey}`);


function greet() {
    console.log("Hello, World!");
}

// Make greet globally available
window.greet = greet;

eoq();