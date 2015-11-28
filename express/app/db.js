"use strict";

/**
 * A module that allows for running a Sequelize sync.
 */
module.exports = function ($injector, sequelize, log, glob) {
    // Resolve each model file to make sure they are registered with Sequelize.
    // Normally these would just be resolved as needed, but we need them to all be loaded for the sync to work.
    var files = glob.sync("models/**/*.js");
    files.forEach(function (file) {
        // This assumes the module name matches the file name, which is the default behavior.
        var name = file.substring(7, file.length - 3);
        $injector.resolve(name);
    });

    return {
        connect: function (sync) {
            log.info("Connecting to database...");

            // If sync is true or "force" run a sync, otherwise run authenticate.
            var promise;
            if (sync) {
                var opts = { force: sync === "force" };
                promise = sequelize.sync(opts);
            } else {
                promise = sequelize.authenticate();
            }

            return promise.then(function () {
                log.info("Connected");
            });
        }
    };
};
