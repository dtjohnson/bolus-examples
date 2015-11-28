"use strict";

/**
 * A module to create some Cats and Owners so the REST endpoints have something to show initially.
 */
module.exports = function (log, Cat, Owner) {
    return function () {
        return Cat.bulkCreate([
            { name: "Mittens" },
            { name: "Fluffy" },
            { name: "Boots" }
        ], {
            validate: true,
            individualHooks: true
        }).then(function () {
            return Owner.bulkCreate([
                { name: "Tom" },
                { name: "Bill" },
                { name: "Fred" }
            ], {
                validate: true,
                individualHooks: true
            });
        });
    };
};
