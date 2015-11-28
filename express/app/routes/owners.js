"use strict";

/**
 * Routes for /owners
 */
module.exports = function (router, Owner) {
    router.get("/", function (req, res, next) {
        Owner.findAll()
            .then(function (owners) {
                res.send(owners);
            })
            .catch(next);
    });

    router.post("/", function (req, res, next) {
        Owner.create(req.body)
            .then(function (owner) {
                res.send(owner);
            })
            .catch(next);
    });

    router.post("/:id", function (req, res, next) {
        Owner.update(req.body, { where: { id: req.params.id }, returning: true })
            .spread(function (affectedCount, owners) {
                if (!affectedCount) return res.status(404).send("Owner not found.");
                res.send(owners[0]);
            })
            .catch(next);
    });

    router.delete("/:id", function (req, res, next) {
        Owner.destroy({ where: { id: req.params.id } })
            .then(function (affectedRows) {
                res.send(!!affectedRows);
            })
            .catch(next);
    });
};
