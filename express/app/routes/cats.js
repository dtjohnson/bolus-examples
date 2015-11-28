"use strict";

/**
 * Routes for /cats
 */
module.exports = function (router, Cat) {
    router.get("/", function (req, res, next) {
        Cat.findAll()
            .then(function (cats) {
                res.send(cats);
            })
            .catch(next);
    });

    router.post("/", function (req, res, next) {
        Cat.create(req.body)
            .then(function (cat) {
                res.send(cat);
            })
            .catch(next);
    });

    router.post("/:id", function (req, res, next) {
        Cat.update(req.body, { where: { id: req.params.id }, returning: true })
            .spread(function (affectedCount, cats) {
                if (!affectedCount) return res.status(404).send("Cat not found.");
                res.send(cats[0]);
            })
            .catch(next);
    });

    router.delete("/:id", function (req, res, next) {
        Cat.destroy({ where: { id: req.params.id } })
            .then(function (affectedRows) {
                res.send(!!affectedRows);
            })
            .catch(next);
    });
};
