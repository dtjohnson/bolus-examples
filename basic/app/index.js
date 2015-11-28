"use strict";

// Set the working directory to this one.
process.chdir(__dirname);

// Create an injector.
var Injector = require("bolus");
var injector = new Injector();

// Register all of the JS files.
injector.registerPath("**/*.js");

// Resolve b and log the result.
var b = injector.resolve("b");
console.log(b);
