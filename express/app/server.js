"use strict";

/**
 * The express.js server.
 */
module.exports = function ($injector, log, glob, express, Promise) {
    var app = express();
    var port = process.env.PORT || 8080;

    // The routes are not registered like standard modules since they are used by this module. Instead they are resolved
    // directly with an express router that matches the file path. So /routes/foo/bar.js will serve HTTP routes as
    // http://example.com/foo/bar/
    var files = glob.sync("routes/**/*.js");
    files.forEach(function (file) {
        // Get the path minus the routes folder and the .js extension.
        var route = file.substring(6, file.length - 3);
        if (route.substr(route.length - 6) === "/index") route = route.substr(0, route.length - 5);

        // Create an express router.
        var router = express.Router();

        // Resolve the route module but pass in the router as a local variable.
        $injector.resolvePath(file, { router: router });

        // Register the router with express.
        app.use(route, router);
    });

    // Handle errors by logging them and returning a 500.
    app.use(function (err, req, res, next) {
        log.error(err);
        if (err.stack) err.stackTrace = err.stack;
        res.status(500).send(err);
    });

    // Return an object with a start method.
    return {
        start: function () {
            return Promise.fromCallback(function (cb) {
                app.listen(port, cb);
            }).then(function () {
                log.info("Listening on port %d.", port);
            });
        }
    };
};
