"use strict";

// Load the bolus library for every spec.
require("bolus");

// Many files use the logger, so here we create a mock.
beforeEach(registerValue("log", {
    trace: jasmine.createSpy('log.trace'),
    debug: jasmine.createSpy('log.debug'),
    info:  jasmine.createSpy('log.info'),
    warn:  jasmine.createSpy('log.warn'),
    error: jasmine.createSpy('log.error'),
    fatal: jasmine.createSpy('log.fatal')
}));
