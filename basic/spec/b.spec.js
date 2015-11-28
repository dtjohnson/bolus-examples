"use strict";

require("bolus");

describe("a", function () {
    beforeEach(registerPath("app/b.js"));

    it("should return 10 when a is 3", function () {
        registerValue("a", 3);
        var b = resolve("b");
        expect(b).toBe(10);
    });

    it("should return 1 when a is -6", function () {
        registerValue("a", -6);
        var b = resolve("b");
        expect(b).toBe(1);
    });
});
