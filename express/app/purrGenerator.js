"use strict";

/**
 * A module that generates a "purr" with a random number of r's.
 */
module.exports = function (log, random) {
    return function () {
        log.info("Generating a purr...");
        return "pu" + new Array(random(2, 20) + 1).join("r");
    };
};
