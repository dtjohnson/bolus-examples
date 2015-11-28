"use strict";

describe("purrGenerator", function () {
    var purrGenerator, randomSpy;

    // Here we mock out the random module with a spy that returns a fixed value for testing.
    beforeEach(function () {
        registerPath("app/purrGenerator.js");
        registerValue("random", randomSpy = jasmine.createSpy('random').and.returnValue(5));
        purrGenerator = resolve("purrGenerator");
    });

    it("should return generate a purr with 5 r's", function () {
        expect(purrGenerator()).toBe("purrrrr");
        expect(randomSpy).toHaveBeenCalledWith(2, 20);
    });
});
