"use strict";

require("bolus").loadTestGlobals();

describe("a", function () {
    var a;

    beforeEach(function () {
        registerPath("app/a.js");
        a = resolve("a");
    });

    it("should return 5", function () {
        expect(a).toBe(5);
    });
});
