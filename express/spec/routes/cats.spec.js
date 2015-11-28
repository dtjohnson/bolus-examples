"use strict";

describe("routes", function () {
    describe("cats", function () {
        var mockRouter, mockModel;
        var mockData = [{
            id: 1,
            name: "Mittens"
        }, {
            id: 2,
            name: "Fluffy"
        }];

        // Before each test, create and register mocks for the router and Cat model. Then resolve the route, which will
        // attach handlers to the mock router that we can invoke in the tests.
        beforeEach(function () {
            registerValue("router", mockRouter = new MockRouter());
            registerValue("Cat", mockModel = new MockModel(mockData));
            resolvePath("app/routes/cats.js");
        });

        it("should handle successful GET / by sending all of the data", function (done) {
            mockRouter.$get("/", function (err, result) {
                expect(err).toBeFalsy();
                expect(result).toBe(mockData);
                done();
            });
        });

        it("should handle unsuccessful GET / by passing on the error", function (done) {
            mockModel.$error = "Some error";
            mockRouter.$get("/", function (err, result) {
                expect(result).toBeFalsy();
                expect(err).toBe(mockModel.$error);
                done();
            });
        });
    });
});

