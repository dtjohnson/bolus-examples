"use strict";

/**
 * A module that creates the Sequelize DB connection.
 */
module.exports = function (log, Sequelize) {
    return new Sequelize(null, null, null, {
        dialect: "sqlite",
        logging: log && function (message) {
            log.info(message);
        }
    });
};
