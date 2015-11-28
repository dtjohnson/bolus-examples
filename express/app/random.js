"use strict";

/**
 * A module that generates a random integer between given min and max.
 */
module.exports = function (log) {
    return function (min, max) {
        log.info("Generating random number between %d and %d...", min, max);
        var r = Math.round(Math.random() * (max - min)) + min;
        log.info("Generated %d.", r);
        return r;
    };
};
