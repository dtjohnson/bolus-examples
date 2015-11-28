"use strict";

/**
 * The Owner model.
 */
module.exports = function (sequelize, Sequelize, Cat) {
    // Define the model.
    var Owner = sequelize.define("owner", {
        name: { type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true } }
    });

    // Set up the 1-to-many relationship.
    Owner.hasMany(Cat, {as: 'cats'});

    // Return the model.
    return Owner;
};
