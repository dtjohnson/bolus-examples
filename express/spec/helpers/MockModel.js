"use strict";

/**
 * This is a very basic mock for a Sequelize model. It simply serves up any specified data when the findAll method is
 * called. Obviously, if you were to do more thorough testing, you'd need to flesh out this mock with many more methods.
 */

var Promise = require("bluebird");

var MockModel = function (data) {
    this._data = data;
};

MockModel.prototype.findAll = function () {
    if (this.$error) return Promise.reject(this.$error);
    return Promise.resolve(this._data);
};

global.MockModel = MockModel;
