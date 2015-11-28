"use strict";

/**
 * The Cat model.
 */
module.exports = function (sequelize, Sequelize, purrGenerator) {
    // Define and return the model in one go.
    return sequelize.define("cat", {
        name: { type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true } },
        purr: { type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true } }
    }, {
        hooks: {
            beforeValidate: function (cat, options) {
                if (!cat.purr) cat.purr = purrGenerator();
            }
        }
    });
};
