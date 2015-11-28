"use strict";

/**
 * This is a very basic mock for an express router. It lets you define routes and then invoke them later. Obviously, if
 * you were to do more thorough testing, you'd need to flesh out this mock with many more methods.
 */

var MockRouter = function () {
    this._routes = [];
};

MockRouter.prototype.get = function (path, handler) {
    this._routes["GET " + path] = handler;
};

MockRouter.prototype.post = function (path, handler) {
    this._routes["POST " + path] = handler;
};

MockRouter.prototype.delete = function (path, handler) {
    this._routes["DELETE " + path] = handler;
};

MockRouter.prototype.$get = function (path, cb) {
    var req = {};
    var res = {
        send: function (result) {
            cb(null, result);
        }
    };
    var next = function (err) {
        cb(err);
    };

    this._routes["GET " + path](req, res, next);
};

global.MockRouter = MockRouter;
