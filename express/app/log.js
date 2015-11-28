"use strict";

/**
 * A Bunyan logger.
 */
module.exports = function (bunyan) {
    return bunyan.createLogger({ name: "express-example" });
};
