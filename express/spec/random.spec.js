"use strict";

describe("random", function () {
    var random;

    beforeEach(registerPath("app/random.js"));

    // This demonstrates the underscore notation.
    beforeEach(resolve(function (_random_) {
        random = _random_;
    }));

    it("should return generate an integer between given bounds", function () {
        var min = 10, max = 20;
        var r = random(10, 20);
        expect(r).toBeGreaterThan(min - 1);
        expect(r).toBeLessThan(max + 1);
        expect(r).toEqual(parseInt(r, 10));
    });

    it("should return generate a fixed integer when given equal bounds", function () {
        var min = 5, max = 5;
        var r = random(5, 5);
        expect(r).toEqual(5);
    });
});
