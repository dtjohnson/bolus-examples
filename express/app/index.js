"use strict";

// TODO: Add include in the owner route so we can see sequelize transactions.

// Set the working directory to this one.
process.chdir(__dirname);

// Create an injector.
var Injector = require("bolus");
var injector = new Injector();

// Register the required modules.
injector.registerRequires({
    bunyan: "bunyan",
    Promise: "bluebird",
    Sequelize: "sequelize",
    express: "express",
    glob: "glob"
}, module);

// Register all of the JS files as modules except for the routes.
// (The routes are no registered on the global scope. See the server.js file for how they are handled.)
injector.registerPath(["**/*.js", "!routes/**"]);

// Resolve the basic modules needed to start the server.
injector.resolve(function (db, dataInit, server, log) {
    // Connect to the DB. This runs Sequelize sync to create the DB tables first.
    db.connect(true)
        .then(function () {
            // Create some initial data. This is just so we have some data to demo.
            // This wouldn't be done in production code.
            return dataInit();
        })
        .then(function () {
            // Start the server.
            return server.start();
        })
        .then(function () {
            // Print a friendly message.
            log.info("Now point your browser to http://localhost:8080/cats");
        });
});